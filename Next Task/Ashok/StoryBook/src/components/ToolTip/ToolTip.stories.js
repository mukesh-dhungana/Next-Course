import React from "react";

import ToolTip from "./ToolTip";

export default {
  title: "Components/Tooltip",
  component: ToolTip,
};

const Template = (args) => <ToolTip {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  type: "primary",
  size: "sm",
  content: "This is the tooltip content",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  type: "primary",
  size: "md",
  content:
    "This is the tooltip content.This is the tooltip content.This is the tooltip content",
};
export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  type: "primary",
  size: "lg",
  content:
    "This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  type: "secondary",
  size: "sm",
  content: "This is the tooltip content",
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  type: "secondary",
  size: "md",
  content:
    "This is the tooltip content.This is the tooltip content.This is the tooltip content",
};
export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  type: "secondary",
  size: "lg",
  content:
    "This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content.This is the tooltip content",
};
