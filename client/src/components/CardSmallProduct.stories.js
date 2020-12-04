import React from "react";
import CardSmallProduct from "./CardSmallProduct";

export default {
  title: "Component/ProductOverviewCard",
  component: CardSmallProduct,
};

const Template = (args) => <CardSmallProduct {...args} />;

export const CardSmallProductDefault = Template.bind({});
CardSmallProductDefault.args = {
  headline: "Blaue Box",
  imgSrc: "https://via.placeholder.com/150",
  price: 328.5,
  quantity: 1,
};
