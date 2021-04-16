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
        <strong style={{ fontSize: "22px" }}>{data.label}</strong> <br />
        <img
          src={data.source}
          style={{ width: 80, height: 80, borderRadius: "50%" }}
          alt="i"
        />{" "}
        <br />
        <p>{data.textarea}</p>
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
