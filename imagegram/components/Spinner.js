import React from "react";

export default function Spinner() {
  return (
    <div
      style={{
        minHeight: "max-content",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 5,
        background: "rgba(51,51,51,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
