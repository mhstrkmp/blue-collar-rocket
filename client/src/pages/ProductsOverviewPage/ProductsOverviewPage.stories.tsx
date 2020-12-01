import React from "react";
import { ProductsOverviewPage } from "./ProductsOverviewPage";

export default {
  title: "Pages/ProductsOverviewPage",
  component: ProductsOverviewPage,
};

export const Standard = (args: any) => <ProductsOverviewPage {...args} />;
