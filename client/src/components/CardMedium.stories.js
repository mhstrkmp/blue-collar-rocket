import React from "react";
import CardMedium from "./CardMedium";

export default {
  title: "Components/Cards/Medium",
  component: CardMedium,
};

const Template = (args) => <CardMedium {...args} />;

export const Product = Template.bind({});
Product.args = {
  title: "Blaue Box",
  imgSrc: "https://via.placeholder.com/100",
  price: 328.5,
  quantity: 1,
};
