import React from "react";
import { useNode } from "@craftjs/core";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import * as alias from "./../../../redux/constant";
import ChooseImage from "../../ClassName/Image/Index";
import ImageSetting from "../../../Components/Image/ImageSetting";

const Setting = () => {
  const dispatch = useDispatch();

  const openImageDrawer = (e) => {
    e.preventDefault();
    dispatch({ type: alias.IMAGE_SECOND_DRAWER_OPEN });
  };

  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div className="">
        <ChooseImage
          image={props.src}
          setProp={setProp}
          openImageDrawer={openImageDrawer}
        />
      </div>
      <div className="mt-16 relative top-0 ">
        <Input
          value={props.alt}
          onChange={(e) => setProp((props) => (props.alt = e.target.value))}
        />
      </div>
      <ImageSetting setProp={setProp} />
    </div>
  );
};

export default Setting;
