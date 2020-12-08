import React from "react";
import { CheckoutPage } from "./CheckoutPage";

export default {
  title: "Pages/Checkout",
  component: CheckoutPage,
};

const Template = (args) => <CheckoutPage {...args} />;
export const Checkout = Template.bind({});
Checkout.args = {
  title: "warenkorb",
};
