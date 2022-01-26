import React from "react";
import { Drawer, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as alias from "./../../redux/constant";
import Logo from "./LogoList";
import Image from "./Image";
const { TabPane } = Tabs;

const  ImageSetting = ({setProp,property}) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.settingDrawer);
  const { imageDrawer } = useSelector((state) => state.imageDrawer);

  const closeImageDrawer = (e) => {
    e.preventDefault();
    dispatch({ type: alias.IMAGE_SECOND_DRAWER_CLOSE });
    // setLeftDrawer(false);
  };
  return (
    <div>
      <Drawer
        width={320}
        closable={false}
        onClose={closeImageDrawer}
        visible={imageDrawer}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Recent Image" key="1">
            <div className="flex justify-center items-center mx-auto">
              <Image setProp={setProp}/>
            </div>
          </TabPane>
          <TabPane tab="Choose Logo" key="2">
            <div className="flex justify-center items-center mx-auto">
              <Logo setProp={setProp}/>
            </div>
          </TabPane>
        </Tabs>
      </Drawer>
    </div>
  );
};

export default ImageSetting;
