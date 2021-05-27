import React from "react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
};

export const Small = () => <Header title="Small" />;
export const Medium = () => <Header title="Medium" size="medium" />;
export const Large = () => <Header title="Large" size="large" />;
