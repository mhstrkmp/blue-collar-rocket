import React from "react";
import { OrderConfirmationPage } from "./OrderConfirmationPage";

export default {
  title: "Pages/Confirmation",
  component: OrderConfirmationPage,
};

const Template = (args) => <OrderConfirmationPage {...args} />;
export const Confirmation = Template.bind({});
