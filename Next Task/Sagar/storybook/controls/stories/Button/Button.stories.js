import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Medium = Template.bind({});
Medium.args = {
  medium: true,
  variant: "success",
  children: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  medium: false,
  variant: "success",
  children: "Large",
};
