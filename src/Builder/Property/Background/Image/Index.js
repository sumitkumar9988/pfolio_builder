import React from "react";
import {  Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from '@ant-design/icons';
import Image from './../../Basic/Image/Index.js';



const Index = ({props,setProps}) => {
  return (
    <div className="flex items-center justify-center mx-auto">
    <Image value={props.backgroundImage} />
    </div>
  );
};

export default Index;
