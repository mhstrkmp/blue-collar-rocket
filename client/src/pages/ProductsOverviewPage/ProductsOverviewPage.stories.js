import React from "react";
import { ProductsOverviewPage } from "./ProductsOverviewPage";

export default {
  title: "Pages/Products",
  component: ProductsOverviewPage,
};

const Template = (args) => <ProductsOverviewPage {...args} />;
export const Products = Template.bind({});
Products.args = {
  title: "Angebote",
};
