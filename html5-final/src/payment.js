// 4761 1200 1000 0492
// 11/2022
export function buyShirt() {
  const options = {
    requestPayerName: true,
    requestPayerPhone: true,
    requestPayerEmail: true,
  };

  const request = new PaymentRequest(
    buildSupportedPaymentMethodData(),
    buildShoppingCartDetails(),
    options,
  );

  function buildSupportedPaymentMethodData() {
    return [
      {
        supportedMethods: 'basic-card',
        data: {
          supportedNetworks: ['visa', 'mastercard'],
          supportedTypes: ['debit', 'credit'],
        },
      },
    ];
  }

  function buildShoppingCartDetails() {
    return {
      id: Math.random(),
      displayItems: [
        {
          label: 'Awesoeme Password Manager Shirt',
          amount: { currency: 'EUR', value: '19.99' },
        },
      ],
      total: {
        label: 'Total',
        amount: { currency: 'EUR', value: '19.99' },
      },
    };
  }

  request
    .show()
    .then(function (paymentResponse) {
      // handle the payment
      console.log(paymentResponse);
      paymentResponse.complete('success').then(function () {
        alert('you are done');
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
