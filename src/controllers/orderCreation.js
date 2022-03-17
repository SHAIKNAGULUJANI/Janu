const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.orderCreation');
const { salesOrderFulfilmentService } = require('vod-npm-services');
const prometheusClient = require('restify-prom-bundle').client;
const orderCreationError = new prometheusClient.Counter({
  name: 'journey_upgrade_order_creation_error_count',
  help: 'vod-ms-journey-upgrade order_creation error'
});

exports.handler = async function orderCreation(req, res, next) {
  Sentry.info('Beginning  createOrder...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    channel: req.body.channel,
    imei: req.body.imei,
    msisdn: req.body.msisdn,
    paymentFlag: req.body.paymentFlag,
    quoteNumber: req.body.quoteNumber,
    submitFlag: req.body.submitFlag,
    userId: req.body.userId
  };

  const response = await salesOrderFulfilmentService.createOrder(req, params);

  if (!response.ok) {
    orderCreationError.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);

  return next();
};
