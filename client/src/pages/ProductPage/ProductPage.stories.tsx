import React from "react";
import { ProductPage } from "./ProductPage";

export default {
  title: "Pages/ProductPage",
  component: ProductPage,
};

export const Standard = (args: any) => <ProductPage {...args} />;
