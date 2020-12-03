import React from "react";
import ProductOverviewCard from "./ProductOverviewCard";

export default {
  title: "Component/ProductOverviewCard",
  component: ProductOverviewCard,
};

const Template = (args) => <ProductOverviewCard {...args} />;

export const ProductOverviewCardDefault = Template.bind({});
ProductOverviewCardDefault.args = {
  children: "Home",
};
