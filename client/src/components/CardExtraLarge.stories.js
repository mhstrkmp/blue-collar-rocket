import React from "react";
import CardExtraLarge from "./CardExtraLarge";

export default {
  title: "Components/Cards/Extra Large",
  component: CardExtraLarge,
};

const Template = (args) => <CardExtraLarge {...args} />;

export const Product = Template.bind({});
Product.args = {
  title: "Blaue Box",
  imgSrc: "https://via.placeholder.com/240",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aspernatur tenetur culpa illum molestiae officia ...",
  price: 328.5,
  service: [
    "Eine blaue Box",
    "Lieferung und Montage",
    "Entsorgung der alten grauen Box",
  ],
};
