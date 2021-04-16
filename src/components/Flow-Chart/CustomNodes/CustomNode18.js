import React, { memo, useState, useEffect } from "react";

import { Handle } from "react-flow-renderer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Resizable } from "re-resizable";

export default memo(({ data }) => {
  const [width, setWidth] = useState(data.width);
  const [height, setHeight] = useState(data.height);

  useEffect(() => {
    data.settingWidth(width);
  }, [width]);

  useEffect(() => {
    data.settingHeight(height);
  }, [height]);

  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#555", zIndex: "10" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Resizable
        style={{
          padding: "10px",
          border: "solid 1px #ddd",
          background: `${data.background}`,
          borderRadius: `${data.radius}px`,
        }}
        size={{ width, height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth(width + d.width);
          setHeight(height + d.height);
        }}
      >
        <div>
          <p style={{ textAlign: "center" }}>{data.label}</p>
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers={true}
            language="javascript"
            style={docco}
          >
            {data.code}
          </SyntaxHighlighter>
        </div>
      </Resizable>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
