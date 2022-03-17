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
import { handler as createOrder } from '../../src/controllers/orderCreation';

// Mocks
import {
  success,
  failure,
  requestBody
} from '../mocks/orderCreationMock';


describe('Given createOrder controller', function () {
  let createOrderMock = null;
  let logger = null;
  let req = null;
  let res = null;
  let next = null;

  before(() => {

    createOrderMock = sinon.stub(salesOrderFulfilmentService, 'createOrder');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-sales-order-fulfilment',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    next = sinon.spy();
    createOrderMock.reset();
    req = httpMocks.createRequest();
    req.body = requestBody;
    req.body.headers = req.headers;
    req.log = logger;
    res = httpMocks.createResponse();
  });

  after(() => {
    createOrderMock.restore();
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

    createOrderMock
      .withArgs(req, params)
      .resolves(success);

    await createOrder(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.data);
  });

  it('invokes error middleware correctly when vod-ms-sales-order-fulfilment fails', async () => {

    const params = {
      headers: req.headers,
      ...requestBody
    };

    createOrderMock
      .withArgs(req, params)
      .resolves(failure.mock);

    await createOrder(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
