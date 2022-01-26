import React from "react";
import { useNode } from "@craftjs/core";

const Canvas = ({ ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div>
      <div ref={connect}>
        {props.children ? (
          props.children
        ) : (
          <div>
            <h4
              style={{
                width: "40%",
                textAlign: "center",
              }}
            >
              Click / Drag and Drop blocks from the left
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
export default Canvas;

Canvas.craft = {
  displayName: "Canvas",
  related: {
    delete: false,
  },
};
