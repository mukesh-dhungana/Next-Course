import React from "react";
import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  size: "small",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
};

export const Medium = Template.bind({});

Medium.args = {
  color: "primary",
  size: "medium",
};

export const Large = Template.bind({});

Large.args = {
  color: "primary",
  size: "large",
};
