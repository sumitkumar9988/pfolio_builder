import React from "react";
import  Setting  from "./Setting";
import { useNode } from "@craftjs/core";

const defaultProps = {
  backgroundColor: "#ffffff",
  radius: "rounded-none",
  shadow: "shadow-none",
};

export const Container = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const { backgroundColor, shadow, radius, children, classes = [] } = props;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <div style={{  'background': backgroundColor}}
      className={` ${shadow} ${radius} ${classes.join(" ")}`}
      ref={connect}
      canvas
    >
      {children}
    </div>
  );
};

Container.craft = {
  displayName: "Div",
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => false,
  },
  related: {
    settings: Setting,
  },
};
