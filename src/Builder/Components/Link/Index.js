import React from "react";
import { useNode, useEditor } from "@craftjs/core";
// import { LinkSettings } from "./LinkSettings";
import ContentEditable from "react-contenteditable";

const defaultProps = {
  text: "Edit Link",
};
export const Link = (props) => {
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
    classes = [],
    url,
    openInNew,
    italic,
    underline,
  } = props;

  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  let atts = {};

  if (!openInNew) {
    atts.target = "_blank";
  }

  if (!enabled) {
    atts.href = url;
  }
  return (
    <a {...atts}>
      <ContentEditable
        className={`${color} ${fontSize} ${fontWeight} ${textTransform} ${
          italic && "italic"
        } ${underline && "underline"} ${classes.join(" ")} cursor-pointer `}
        innerRef={connect}
        html={text} // innerHTML of the editable div
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }} // use true to disable editing
        //   tagName="h2" // Use a custom HTML tag (uses a div by default)
        style={{
          fontFamily: fontFamily,
        }}
      />
    </a>
  );
};

Link.craft = {
  displayName: "Link",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  // related: {
  //   toolbar: LinkSettings,
  // },
};
