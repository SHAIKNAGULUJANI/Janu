import 'chai/register-should';
import chai from 'chai';
import config from 'config';
import httpStatus from 'http-status-codes';
import httpMocks from 'node-mocks-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const salesOrderFulfilmentService = require('vod-npm-services/vod-ms-sales-order-fulfilment/service');

chai.use(sinonChai);

const expect = chai.expect;

// Controller
import { handler as submitUpgrade } from '../../src/controllers/submitUpgrade';

// Mocks
import {
  success,
  failure,
  requestBody
} from '../mocks/submitUpgrade-mock';


describe('Given submitUpgrade controller', function () {
  let submitUpgradeMock = null;
  let logger = null;
  let req = null;
  let res = null;
  let next = null;

  before(() => {

    submitUpgradeMock = sinon.stub(salesOrderFulfilmentService, 'submitUpgrade');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-app-sales-order-fulfilment',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    next = sinon.spy();
    submitUpgradeMock.reset();
    req = httpMocks.createRequest();
    req.headers = {
      authorization: 'Bearer eyasdasdlkklkl23kjdadalsdbad'
    };
    req.body = requestBody;
    req.body.headers = req.headers;
    req.log = logger;
    res = httpMocks.createResponse();
  });

  after(() => {
    submitUpgradeMock.restore();
  });

  afterEach(() => {
    req = null;
    res = null;
    next = null;
  });

  it('returns 201 when given a valid request', async () => {

    const params = {
      headers: req.headers,
      ...requestBody
    };

    submitUpgradeMock
      .withArgs(req, params)
      .resolves(success);

    await submitUpgrade(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.data);
  });

  it('invokes error middleware correctly when vod-ms-app-sales-order-fulfilment fails', async () => {

    const params = {
      headers: req.headers,
      ...requestBody
    };

    submitUpgradeMock
      .withArgs(req, params)
      .resolves(failure.mock);

    await submitUpgrade(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
