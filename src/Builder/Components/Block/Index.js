import React, { useContext } from "react";
import { useNode } from "@craftjs/core";
import Setting from "./Setting";
import { ReactComponent as BuilderSvg } from "./../../../Asset/builder.svg";

const defaultProps = {
  backgroundColor: "#fff",
  classes: ["pt-1, pb-1"],
};

export const Block = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { children, backgroundColor, classes } = props;

  console.log(backgroundColor);
  return (
    <div
      style={{ background: backgroundColor }}
      class={` ${classes.join(" ")}`}
      ref={connect}
    >
      {children ? (
        children
      ) : (
        <div className="flex items-center justify-center mx-auto flex-col">
          <div>
            <h4 className="w-full py-32 mx-auto text-2xl font-bold  text-center">
              Click / Drag and Drop blocks from the left
            </h4>
          </div>
          <div className="">
            <BuilderSvg className="h-1/2 w-1/2 mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

Block.craft = {
  displayName: "Block",
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => false,
  },
  related: {
  },
};
