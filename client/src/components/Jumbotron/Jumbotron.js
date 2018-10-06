import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 550, clear: "both", padding: 0, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
