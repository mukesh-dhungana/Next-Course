import React from "react";

function Error({ statusCode }) {
  
  return <div>{statusCode} | This is custom error page</div>;
}

export default Error;
