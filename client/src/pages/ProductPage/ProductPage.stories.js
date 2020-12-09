import React from "react";
import { ProductPage } from "./ProductPage";

export default {
  title: "Pages/Product",
  component: ProductPage,
};

const Template = (args) => <ProductPage {...args} />;
export const Product = Template.bind({});
Product.args = {
  title: "Angebot",
  productName: "Blaue Box",
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
