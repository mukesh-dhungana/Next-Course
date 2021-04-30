import React from "react";

function Layout(props) {
  return (
    <div>
      This is common layout
      {props.children}
    </div>
  );
}

export default Layout;
