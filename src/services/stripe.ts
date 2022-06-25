import Stripe from 'stripe';

export const stripe = new Stripe(
  'sk_test_51L7SvZGMng5XPWWSKKZ1fcAmb82NgCw7Adfae0KmVhtwIqFoKFrn1ZIv8gU38dwBKBR5gtKdeytPOk9u5lLia33h00ZwQF9Wpq',
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version: '0.1.0'
    }
  }
)