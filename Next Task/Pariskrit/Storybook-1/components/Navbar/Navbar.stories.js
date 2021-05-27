import React from "react";
import { Navbar } from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const User = Template.bind({});

User.args = {
  role: "User",
};

export const Admin = Template.bind({});

Admin.args = {
  role: "Admin",
};

export const Home = Template.bind({});
