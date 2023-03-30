import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="lds-ellipsis">
        <div style={{ backgroundColor: "#1976d2" }}></div>
        <div style={{ backgroundColor: "#1976d2" }}></div>
        <div style={{ backgroundColor: "#1976d2" }}></div>
        <div style={{ backgroundColor: "#1976d2" }}></div>
      </div>
    </div>
  );
};

export default Loader;
