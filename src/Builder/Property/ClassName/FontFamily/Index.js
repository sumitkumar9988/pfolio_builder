import React from "react";
import { Select } from "antd";
import fontFamily from "./fontfamily.json";
const { Option } = Select;

const FontFamily = ({setProp,propsName,props}) => {
 
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <Select
        defaultValue={props[`${propsName.FontFamily}`]}
        style={{ width: 240 }}
        onChange={(value) => setProp((props) => (props[`${propsName.FontFamily}`] = value))}
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
