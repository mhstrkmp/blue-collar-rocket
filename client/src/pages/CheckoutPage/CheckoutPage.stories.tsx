import React from "react";
import { CheckoutPage } from "./CheckoutPage";

export default {
  title: "Pages/CheckoutPage",
  component: CheckoutPage,
};

export const Standard = (args: any) => <CheckoutPage {...args} />;
