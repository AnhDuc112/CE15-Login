import React, { Children } from "react";
import Header from "../component/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
