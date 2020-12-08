import React from "react";
import { ProductPage } from "./ProductPage";

export default {
  title: "Pages/Product",
  component: ProductPage,
};

const Template = (args) => <ProductPage {...args} />;
export const Product = Template.bind({});
Product.args = {
  title: "Angebot",
};
