import React from "react";
import {  Radio } from "antd";
const Index = ({setProp,propsName,props}) => {
  const onChange = e => {
    setProp((props) => (props[`${propsName.Transform}`] = e.target.value));
 };
  return (
    <div>
      <Radio.Group onChange={onChange} value={props[`${propsName.Transform}`]}>
        <Radio.Button value="normal-case">Normal</Radio.Button>
        <Radio.Button value="lowercase">LowerCase</Radio.Button>
        <Radio.Button value="uppercase">UpperCase</Radio.Button>
        <Radio.Button value="capitalize">Capitalize</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Index;
