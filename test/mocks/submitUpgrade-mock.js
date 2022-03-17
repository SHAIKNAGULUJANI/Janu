export const requestBody = {
  channel: 'CBU',
  checkoutAuthToken: 'Bearer eyfvjgaksjdjsf2891hjdbkjflsdjfasd',
  dealsheetNumber: 'SCDF231I',
  msisdn: '0715351214',
  email: '12002@voda.co.za',
  storeIdentifier: 'istore',
  commission: 2,
  imei: '123456781190741',
  deliveryAddress: {
    addressType: 'RESIDENTIAL',
    buildingName: '',
    streetNo: '',
    streetName: 'Aenuw',
    suburb: 'Constantia Kloof',
    postalCode: '1709',
    unitNumber: '',
    city: 'Roodepoort',
    province: 'Gauteng'
  }
};

export const success = {
  ok: true,
  status: 200,
  data: {
    messages: [],
    result: {
      success: true,
      quoteNumber: 'VODACOMONLIN-0000000000019887',
      email: null,
      orderNumber: null,
      messages: [
        null
      ]
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
