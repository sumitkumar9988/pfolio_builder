import React from "react";
import { Select } from "antd";
import { Typography } from "antd";
import fontSizeList from "./fontSize.json";
const { Option } = Select;

const fontSize = ({ setProp, value }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <Typography.Title underline level={5}>
        Font Size
      </Typography.Title>
      <Select
        defaultValue={value}
        style={{ width: 240 }}
        onChange={(value) => setProp((props) => (props.fontSize = value),500)}
      >
        {fontSizeList.map((item, index) => {
          return (
            <Option value={item.value} key={index}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default fontSize;
