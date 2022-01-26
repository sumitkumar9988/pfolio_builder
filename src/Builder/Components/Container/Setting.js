import React from "react";
import { useNode } from "@craftjs/core";
import { Typography } from "antd";
import { Collapse ,PageHeader,} from 'antd';
import { HexColorPicker } from "react-colorful";
const Setting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto">
        <Typography.Title underline level={5}>
          Background Color
        </Typography.Title>
        <div className="pt-4">
          <HexColorPicker
            color={props.backgroundColor}
            onChange={(color) =>
              setProp((props) => (props.backgroundColor = color))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
