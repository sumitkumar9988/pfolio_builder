import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import Setting from "./Setting";
import ContentEditable from "react-contenteditable";

const defaultProps = {
  text: "Edit Text",
  fontFamily:"Arial"
};
export const Text = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    text,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    textTransform,
    tag,
    classes = [],
    italic,
    underline,
  } = props;

  console.log(fontFamily);
  console.log(fontWeight);
  console.log(fontFamily);
  console.log("FONT   sIZE",fontSize);

  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ContentEditable
      className={`${color} ${fontSize} ${fontWeight} ${textTransform} ${
        italic && "italic"
      } ${underline && "underline"} ${classes.join(" ")} `}
      innerRef={connect}
      html={text} // innerHTML of the editable div
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      tagName={tag} // Use a custom HTML tag (uses a div by default)
      style={{
        fontFamily: fontFamily,
      }}
    />
  );
};

Text.craft = {
  displayName: "Text",
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  related: {
    settings: Setting,
  },
};
