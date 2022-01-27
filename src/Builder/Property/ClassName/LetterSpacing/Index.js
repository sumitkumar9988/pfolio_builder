import React from "react";
import { Select } from "antd";

const LetterSpacing = [
  {
    name: "tighter",
    value: "tracking-tighter",
  },
  {
    name: "tight",
    value: "tracking-tight",
  },
  {
    name: "normal",
    value: "tracking-normal",
  },
  {
    name: "wide",
    value: "tracking-wide",
  },
  {
    name: "wider",
    value: "tracking-wider",
  },
  {
    name: "widest",
    value: "tracking-widest",
  },
];

const Index = ({ setProp,propsName,props }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <Select
        defaultValue={props[`${propsName.LetterSpacing}`]}
        style={{ width: 240 }}
        onChange={(value) => setProp((props) => (props[`${propsName.LetterSpacing}`] = value))}
      >
        {LetterSpacing.map((item, index) => {
          return (
            <Select.Option
              value={item.value}
              className={`${item.value} font-bold`}
              key={index}
            >
              {item.name}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default Index;
