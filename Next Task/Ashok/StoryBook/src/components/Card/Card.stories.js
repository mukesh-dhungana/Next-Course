import React from "react";

import Card from "./Card";

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  children: "Some content",
  size: "medium",
};
export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "white",
  children: "Some content",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "white",
  children: "Small content",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "white",
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
