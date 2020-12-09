import React from "react";
import CardLarge from "./CardLarge";

export default {
  title: "Components/Cards/Large",
  component: CardLarge,
};

const Template = (args) => <CardLarge {...args} />;

export const Product = Template.bind({});
Product.args = {
  cardTitle: "Blaue Box",
  imgSrc: "https://via.placeholder.com/150",
  cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
  price: 328.5,
};
