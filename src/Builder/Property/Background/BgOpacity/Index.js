import React from "react";
import { Select, Form } from "antd";

const opacityList = [
  {
    name: "opacity-0",
    value: "bg-opacity-0",
  },
  {
    name: "opacity-10",
    value: "bg-opacity-10",
  },
  {
    name: "opacity-20",
    value: "bg-opacity-20",
  },
  {
    name: "opacity-25",
    value: "bg-opacity-25",
  },
  {
    name: "opacity-30",
    value: "bg-opacity-30",
  },
  {
    name: "opacity-40",
    value: "bg-opacity-40",
  },
  {
    name: "opacity-50",
    value: "bg-opacity-50",
  },
  {
    name: "opacity-60",
    value: "bg-opacity-60",
  },
  {
    name: "opacity-70",
    value: "bg-opacity-70",
  },
  {
    name: "opacity-80",
    value: "bg-opacity-80",
  },
  {
    name: "opacity-90",
    value: "bg-opacity-90",
  },
  {
    name: "opacity-100",
    value: "bg-opacity-100",
  },
];

const Index = ({ setProp, props }) => {
  return (
    <div>
     
        <Select
          defaultValue={props.backgroundOpacity}
          style={{ width: 240 }}
          onChange={(value) =>
            setProp((props) => (props.backgroundOpacity = value))
          }
        >
          {opacityList.map((item, index) => {
            return (
              <Select.Option value={item.value} key={index}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
    </div>
  );
};

export default Index;
