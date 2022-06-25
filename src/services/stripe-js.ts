import {loadStripe} from '@stripe/stripe-js';

export async function getStripeJs(){
  const stripeJs = await loadStripe('pk_test_51L7SvZGMng5XPWWS2Fk20646wJZXcfPG7TTAxNFS5eeo1wyo52yhPHRwMuB9waQDWuueUa7lv9SVSL00JF35SZci00LmSY5hmE');
  return stripeJs;
}