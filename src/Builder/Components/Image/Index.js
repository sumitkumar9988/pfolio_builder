import React from "react";
import { useNode } from "@craftjs/core";
import  Setting  from "./Setting";

const defaultProps = {
  classes: [],
  attributes: [],
  position: "",
  alt: "sample image",
  src: "https://images.unsplash.com/photo-1469167143048-825aea121765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
};

export const Image = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const { alt, src, position, classes = [], attributes = [] } = props;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <img
      ref={connect}
      src={src}
      className={` ${position} ${classes.join(" ")}`}
      {...Object.assign({}, ...attributes)}
      alt={alt}
    />
  );
};

Image.craft = {
  displayName: "Image",
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
  related: {
    settings: Setting,
  },
};
