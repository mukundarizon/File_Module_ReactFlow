import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#555", zIndex: "10" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div
        style={{
          padding: "10px",
          border: "solid 1px #ddd",
          background: `${data.background}`,
          borderRadius: `${data.radius}px`,
        }}
      >
        <p style={{ textAlign: "center" }}>{data.label}</p>
        <p style={{ textAlign: "center" }}>{data.label2}</p>
        <p style={{ textAlign: "center" }}>{data.textarea}</p>
        <p style={{ textAlign: "center" }}>{data.textarea2}</p>
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
