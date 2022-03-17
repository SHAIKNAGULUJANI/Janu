const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.submitUpgrade');
const { salesOrderFulfilmentService } = require('vod-npm-services');

const client = require('restify-prom-bundle').client;

const submitUpgradeError = new client.Counter({
  name: 'journey_upgrade_submit_upgrade_error_count',
  help: 'vod-ms-journey-upgrade submit_upgrade error'
});

exports.handler = async function submitUpgrade(req, res, next) {

  Sentry.info('Beginning submitUpgrade...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    checkoutAuthToken: req.body.checkoutAuthToken,
    channel: req.body.channel,
    dealsheetNumber: req.body.dealsheetNumber,
    msisdn: req.body.msisdn,
    email: req.body.email,
    storeIdentifier: req.body.storeIdentifier,
    commission: req.body.commission,
    deliveryAddress: req.body.deliveryAddress,
    imei: req.body.imei
  };

  const response = await salesOrderFulfilmentService.submitUpgrade(req, params);

  if (!response.ok) {
    submitUpgradeError.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);

  return next();
};
