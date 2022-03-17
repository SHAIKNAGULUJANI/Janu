const success = {
  mock: {
    ok: true,
    status: 200,
    data: {
      result: [
        {
          dealsheetNumber: 'V2ISTORET3',
          dealDescription: '(MGD73) iPhone 12 Pro Max 128GB Graphite (NonVSP) + 20GB DATA X 1 - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R1299 PM (R1020 Finance + R279 Sub on Red 1GB 100min',
          dealType: null,
          numberOfAccessory: '0',
          packageCode: 'RD2',
          pricePlan: 'RED 1GB 100min',
          tarriffDescription: 'RED 1GB 100min',
          addDate: '2021-07-14 06:35:44.0',
          fromDate: '2021-07-14',
          toDate: '2021-09-06',
          contractMonths: 24,
          numberOfPhones: 0,
          financedHnadset: 'Y',
          stockCode: null,
          device: null,
          secondaryProductCode: null,
          handsetInstallment: 1020,
          subscriptionValue: 279,
          dealValue: 1299,
          groupId: null,
          channel: 'VODONL',
          cashPayIn: 0
        },
        {
          dealsheetNumber: 'V2ISTORET4',
          dealDescription: '(MGD73) iPhone 12 Pro Max 128GB Graphite (NonVSP) + 20GB DATA X 1 - (H) + VIDEO TICKET - 3 MONTHS - 1GB @ R1329 PM (R1020 Finance + R309 Sub on Red 1GB 100min TopUp',
          dealType: null,
          numberOfAccessory: '0',
          packageCode: 'RU2',
          pricePlan: 'RED 1GB 100min - TopUp',
          tarriffDescription: 'RED 1GB 100min - TopUp',
          addDate: '2021-07-14 06:35:51.0',
          fromDate: '2021-07-14',
          toDate: '2021-09-06',
          contractMonths: 24,
          numberOfPhones: 0,
          financedHnadset: 'Y',
          stockCode: null,
          device: null,
          secondaryProductCode: null,
          handsetInstallment: 1020,
          subscriptionValue: 308.99,
          dealValue: 1328.99,
          groupId: null,
          channel: 'VODONL',
          cashPayIn: 0
        }
      ]
    }
  }
};

const expected = {
  data: {
    result: [
      {
        dealsheetNumber: 'V2ISTORET3',
        dealDescription: '(MGD73) iPhone 12 Pro Max 128GB Graphite (NonVSP) + 20GB DATA X 1 - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R1299 PM (R1020 Finance + R279 Sub on Red 1GB 100min',
        dealType: null,
        numberOfAccessory: '0',
        packageCode: 'RD2',
        pricePlan: 'RED 1GB 100min',
        tarriffDescription: 'RED 1GB 100min',
        addDate: '2021-07-14 06:35:44.0',
        fromDate: '2021-07-14',
        toDate: '2021-09-06',
        contractMonths: 24,
        numberOfPhones: 0,
        financedHnadset: 'Y',
        stockCode: null,
        device: null,
        secondaryProductCode: null,
        handsetInstallment: 1020,
        subscriptionValue: 279,
        dealValue: 1299,
        groupId: null,
        channel: 'VODONL',
        cashPayIn: 0
      },
      {
        dealsheetNumber: 'V2ISTORET4',
        dealDescription: '(MGD73) iPhone 12 Pro Max 128GB Graphite (NonVSP) + 20GB DATA X 1 - (H) + VIDEO TICKET - 3 MONTHS - 1GB @ R1329 PM (R1020 Finance + R309 Sub on Red 1GB 100min TopUp',
        dealType: null,
        numberOfAccessory: '0',
        packageCode: 'RU2',
        pricePlan: 'RED 1GB 100min - TopUp',
        tarriffDescription: 'RED 1GB 100min - TopUp',
        addDate: '2021-07-14 06:35:51.0',
        fromDate: '2021-07-14',
        toDate: '2021-09-06',
        contractMonths: 24,
        numberOfPhones: 0,
        financedHnadset: 'Y',
        stockCode: null,
        device: null,
        secondaryProductCode: null,
        handsetInstallment: 1020,
        subscriptionValue: 308.99,
        dealValue: 1328.99,
        groupId: null,
        channel: 'VODONL',
        cashPayIn: 0
      }
    ]
  }
};

const failure = {
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

module.exports = {
  success,
  failure,
  expected
};
