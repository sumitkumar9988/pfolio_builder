import React from "react";
import { Form } from "antd";
import FontFamily from "./../../ClassName/FontFamily/Index";
import FontStyle from "./../../ClassName/FontStyle/Index";
import LetterSpacing from "./../../ClassName/LetterSpacing/Index";
import TextColor from "./../../ClassName/TextColor/Index";

const Style = ({setProp,propsName,props}) => {
  return (
    <div>
      <Form.Item
        label="Text Color"
        size="large"
        tooltip="Change text Color or add HEX color code"
      >
        <TextColor setProp={setProp} propsName={propsName} props={props}/>
      </Form.Item>
      <Form.Item
        label="Select Font family"
        size="large"
        tooltip="Select font style according to your need"
      >
        <FontFamily setProp={setProp} propsName={propsName} props={props}/>
      </Form.Item>{" "}
      <Form.Item
        label="Change font style"
        size="large"
        tooltip="Change subheading Title of selected Item"
      >
        <FontStyle setProp={setProp} propsName={propsName} props={props}/>
      </Form.Item>{" "}
      <Form.Item
        label="Letter Spacing"
        size="large"
        tooltip="Chnage the letter spacing of selected text"
      >
        <LetterSpacing setProp={setProp} propsName={propsName} props={props}/>
      </Form.Item>
    </div>
  );
};

export default Style;
