import React from "react";
import { Select } from "antd";
import fontFamily from "./fontfamily.json";
const { Option } = Select;

const FontFamily = ({setProp,value='Arial'}) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <Select
        defaultValue={value}
        style={{ width: 240 }}
        onChange={(value) => setProp((props) => (props.fontFamily = value))}
      >
        {fontFamily.map((item, index) => {
          return (
            <Option
              value={item.value}
              style={{ fontFamily: `${item.value}` }}
              key={index}
            >
              {item.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default FontFamily;
