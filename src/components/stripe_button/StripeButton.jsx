import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIBXHLkpZMtyhdkIE5u3DbqznhHN0XGpMRlmfPWLoWEbtx9Qlgzs6VChVhaO4yQnJEY9KuDOxIkEesUZXm5O7Iz00Vm9lPPld";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Fictional-Ecomm"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
