import React from "react";
import { ProductsOverviewPage } from "./ProductsOverviewPage";

export default {
  title: "Pages/Products",
  component: ProductsOverviewPage,
};

const Template = (args) => <ProductsOverviewPage {...args} />;
export const Products = Template.bind({});
Products.args = {
  title: "Angebote",
  products: [
    {
      id: "064340",
      name: "Blaue Box",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
      price: 328.5,
    },
    {
      id: "076309",
      name: "Blaue Box",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
      price: 328.5,
    },
    {
      id: "07345340",
      name: "Blaue Box",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
      price: 328.5,
    },
    {
      id: "07343460",
      name: "Blaue Box",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
      price: 328.5,
    },
    {
      id: "07789340",
      name: "Blaue Box",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ...",
      price: 328.5,
    },
  ],
};
