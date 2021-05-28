import React from "react";

import Card from "./Card";

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "blue",
  children: "Small content",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "Gray",
  children: "Medium content",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "white",
  children: "Large content",
  size: "large",
};

export default {
  title: "Components/Card",
  component: Card,
};
