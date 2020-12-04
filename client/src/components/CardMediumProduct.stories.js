import React from "react";
import CardMediumProduct from "./CardMediumProduct";

export default {
  title: "Component/ProductOverviewCard",
  component: CardMediumProduct,
};

const Template = (args) => <CardMediumProduct {...args} />;

export const CardMediumProductDefault = Template.bind({});
CardMediumProductDefault.args = {
  headline: "Blaue Box",
  imgSrc: "https://via.placeholder.com/250",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
  price: 328.5,
};
