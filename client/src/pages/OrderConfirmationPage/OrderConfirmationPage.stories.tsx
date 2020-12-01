import React from "react";
import { OrderConfirmationPage } from "./OrderConfirmationPage";

export default {
  title: "Pages/OrderConfirmationPage",
  component: OrderConfirmationPage,
};

export const Standard = (args: any) => <OrderConfirmationPage {...args} />;
