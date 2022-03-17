export const requestBody = {
  channel: 'online',
  msisdn: '27670192898',
  imei: '123456781190741',
  paymentFlag: 'Y',
  quoteNumber: 'VODACOMONLIN-0000110000021922',
  submitFlag: 'Y',
  userId: 'OLUFEMI'
};

export const success = {
  ok: true,
  status: 200,
  data: {
    messages: [],
    result: {
      orderNumber: '1-201344879726',
      orderId: '1-2KHVJJHQ',
      msisdn: '27637056733',
      iccid: '',
      imei: '123456781190741'
    },
    successful: false,
    code: 0
  }
};

export const failure = {
  mock: {
    ok: false,
    error: {
      response: {
        status: 400,
        statusText: 'Bad Request'
      }
    }
  },
  expected: {
    result: {
      status: 400,
      error: 'Bad Request',
      message: 'Bad Request'
    }
  }
};
