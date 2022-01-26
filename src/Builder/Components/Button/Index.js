import React from "react";
import { useNode } from "@craftjs/core";
// import { ButtonSettings } from "./ButtonSettings";

const defaultProps = {
  text: "Click me",
  color: "text-green-100",
  fontSize: "font-base",
  fontWeight: "font-normal",
  textTransform: "capitalize",
  fontFamily: "Arial",
  backgroundColor: "bg-green-700",
  hoverColor: "hover:bg-green-800",
  borderColor: "order-transparent",
  borderWidth: "border-0",
  borderStyle: "border-none",
  borderRadius: "rounded-lg",
  url: "/",
  openInNew: false,
  classes: [
    "h-full",
    "px-5",
    "py-2",
    "duration-150",
    "mx-auto",
    "text-center",
    "my-auto",
  ],
  attributes: [],
};

export const Button = ({ ...props }) => {
  props = { ...defaultProps, ...props };

  const {
    text,
    color,
    fontFamily,
    fontWeight,
    textTransform,
    backgroundColor,
    hoverColor,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    classes = [],
    url,
    openInNew,
  } = props;

  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));

  let attributes = {};
  if (url !== "") {
    attributes.href = url;
  }
  if (openInNew) {
    attributes.target = "_blank";
  }

  return (
    <button
      ref={connect}
      {...attributes}
      className={`${color} ${fontWeight} ${textTransform} ${backgroundColor} ${hoverColor} ${borderColor} ${borderStyle} ${borderWidth} ${borderRadius} ${classes.join(
        " "
      )}`}
      style={{ fontFamily: fontFamily }}
    >
      {text}
    </button>
  );
};

Button.craft = {
  displayName: "Button",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  // related: {
  //   toolbar: ButtonSettings,
  // },
};
