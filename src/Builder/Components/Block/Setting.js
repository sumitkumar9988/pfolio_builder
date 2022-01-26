import React from "react";
import { useNode } from '@craftjs/core';
import { Collapse ,PageHeader,Typography,} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { HexColorPicker } from "react-colorful";
import { TwitterPicker } from 'react-color';
import {InfoCircleOutlined } from '@ant-design/icons';
import  './index.css'
const { Panel } = Collapse;
const { Title } = Typography;
const Setting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

 
  return (
    <div className="w-full h-full flex flex-col  justify-center items-center ">

<Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse w-full px-4"
  >
    <Panel header={<Title level={4}>Background Color</Title>}key="1" className="site-collapse-custom-panel">
  
    <div className="pt-4 flex mx-auto items-center justify-center">
        <HexColorPicker color={props.backgroundColor} onChange={(color) => setProp((props) => (props.backgroundColor = color))} />
        </div> 
    </Panel>
  </Collapse>
       {/* <Typography.Title underline level={5}>
          Background Color
        </Typography.Title>
        <div className="pt-4">
        <HexColorPicker color={props.backgroundColor} onChange={(color) => setProp((props) => (props.backgroundColor = color))} />
        </div> */}
          {/* <PageHeader
    className="site-page-header"
    onBack={() => null}
    backIcon={<InfoCircleOutlined />}
    title="Pick a background color"
  /> */}
    </div>
  );
};

export default Setting;
