import React from "react";
import { Select } from "antd";
import { Typography } from "antd";
import fontweightList from "./fontweight.json";
const { Option } = Select;

const FontWeight = ({ setProp, value }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <Typography.Title underline level={5}>
        Font Weight
      </Typography.Title>
      <Select
        defaultValue={value}
        style={{ width: 240 }}
        onChange={(value) => setProp((props) => (props.fontWeight = value),500)}
      >
        {fontweightList.map((item, index) => {
          return (
            <Option value={item.value} className={item.value} key={index}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default FontWeight;
