import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, marginLeft: 15 }} className="btn btn-success">
    {props.children}
  </button>
);
