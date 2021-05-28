import React from "react";

import InputField from "./InputField";

const Template = (args) => <InputField {...args} />;

export const SimpleField = Template.bind({});
SimpleField.args = {
  placeholder: "enter here",
  name: "username",
};

export const DetailedField = Template.bind({});
DetailedField.args = {
  label: "username",
  type: "text",
  name: "username",
  placeholder: "Enter username",
  value: "",
};

export const ErrorField = Template.bind({});
ErrorField.args = {
  ...DetailedField.args,
  error: "username required",
};

export default {
  title: "Components/InputField",
  component: InputField,
};
