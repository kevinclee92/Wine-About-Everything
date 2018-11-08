import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container" style={{maxHeight: "400px"}}>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
