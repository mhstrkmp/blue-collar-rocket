import React from "react";
import ProductOverviewCard from "./ProductOverviewCard";

export default {
  title: "Component/ProductOverviewCard",
  component: ProductOverviewCard,
};

const Template = (args) => <ProductOverviewCard {...args} />;

export const ProductOverviewCardDefault = Template.bind({});
ProductOverviewCardDefault.args = {
  headline: "Blaue Box",
  imgSrc: "https://via.placeholder.com/250",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
  price: 328.5,
};
