import React from "react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonAdd = Template.bind({});
ButtonAdd.args = {
  children: "Hinzufügen",
};

export const ButtonOrder = Template.bind({});
ButtonOrder.args = {
  children: "Bestellen",
};
