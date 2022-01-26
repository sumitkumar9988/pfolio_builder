import React from "react";
import { useNode } from "@craftjs/core";
import FontFamily from "./../../ClassName/Font-family/FontFamily";
import FontWeight from './../../ClassName/Font-weight/FontWeight'
import FontSize from "../../ClassName/Font-size/FontSize";
const Setting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FontFamily setProp={setProp} propsName='fontFamily' value={props.fontFamily}/>
      <FontWeight setProp={setProp} propsName='fontWeight' value={props.fontWeight}/>
      <FontSize setProp={setProp} propsName='fontSize' value={props.fontSize}/>
    </div>
  );
};

export default Setting;
