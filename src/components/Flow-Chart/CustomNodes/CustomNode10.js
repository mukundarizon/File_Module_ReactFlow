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
        <img
          src={data.source}
          style={{ width: 80, height: 80, borderRadius: "50%" }}
          alt="i"
        />
        <img
          src={data.source2}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            marginLeft: "10px",
          }}
          alt="i"
        />
        <img
          src={data.source3}
          style={{ width: 80, height: 80, borderRadius: "50%" }}
          alt="i"
        />
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
