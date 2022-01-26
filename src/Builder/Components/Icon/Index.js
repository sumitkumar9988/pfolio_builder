import React from "react";
import { useNode } from "@craftjs/core";
// import { IconSettings } from "./iconSettings";

const defaultProps = {
  color: "bg-black",
  backgroundColor: "bg-white",
  classes: ["m-8", "w-20", "h-20"],
};

export const Icon = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { Icon, color, classes, backgroundColor } = props;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <div
      ref={connect}
      class={`${color} ${backgroundColor} ${classes.join(" ")}`}
    >
      {Icon}
    </div>
  );
};

Icon.craft = {
  displayName: "Icon",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  // related: {
  //   toolbar: IconSettings,
  // },
};
