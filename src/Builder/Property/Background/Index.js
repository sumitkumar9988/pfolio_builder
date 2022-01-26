import React from "react";
import { Form } from "antd";
import BackgroundColor from "./Color/Index";
import BackgroundImage from './Image/Index';
;

const Index = ({ setProp ,props}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Form.Item
        label="Change Background Color"
        size="large"
        tooltip="Chnage the background from color picker or HEX code"
      >
        <BackgroundColor props={props} setProp={setProp} />
      </Form.Item>
      <Form.Item
        label="Add Background Image"
        size="large"
        tooltip="Add Background Image or Import"
      >
        <BackgroundImage props={props} setProp={setProp}/>
      </Form.Item>
    </div>
  );
};

export default Index;
