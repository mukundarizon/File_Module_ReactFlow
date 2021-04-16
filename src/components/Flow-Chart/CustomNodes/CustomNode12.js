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
          borderRadius: `${data.radius}px`,
        }}
      >
        <p>{data.label}</p>
        <p>{data.label2}</p>
        <p>{data.textarea}</p>
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
