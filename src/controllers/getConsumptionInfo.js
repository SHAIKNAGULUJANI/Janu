const httpStatus = require('http-status-codes');

const { customerService } = require('vod-npm-services');
const { consumptionDetailsSanitizer } = require('../helpers/sanitizers');
const client = require('restify-prom-bundle').client;

const getpastUsageError = new client.Counter({
  name: 'journey_upgrade_get_consumption_past_usage_error_count',
  help: 'vod-ms-journey-upgrade get_consumption_past_usage error'
});

exports.handler = async function getConsumptionInfo(req, res, next) {

  const params = {
    headers: req.headers,
    msisdn: req.query.msisdn
  };

  const pastUsageResult = await customerService.getPastUsage(req, params);

  if (!pastUsageResult.ok) {
    getpastUsageError.inc();
    return next(pastUsageResult.error);
  }

  const pastUseDet = pastUsageResult.data.result;

  const finalResult = consumptionDetailsSanitizer(pastUseDet);

  res.status(httpStatus.OK);
  res.json({
    result: finalResult
  });

};
