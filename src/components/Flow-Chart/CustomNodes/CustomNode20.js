import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div
        style={{
          background: `${data.background}`,
          padding: "10px",
          width: "100px",
          height: "100px",
          textAlign: "center",
          wordWrap: "break-word",
          borderRadius: `${data.radius}px`,
        }}
      >
        <p>{data.label}</p>
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
