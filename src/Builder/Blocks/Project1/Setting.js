import React from "react";
import { Tabs, Button, Form } from "antd";
import { useNode } from "@craftjs/core";
import TextProps from './../../Property/Basic/Text/Index';
import Image from './../../Property/Basic/Image/Index'
import Backgroundprops from './../../Property/Background/Index';

const { TabPane } = Tabs;
const Setting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({ props: node.data.props }));

  const titlePropsList={
      Color:"titleColor",
      Italic:"titleItalic",
      Underline:"titleUnderline",
      Transform:"titleTransform",
      FontFamily:"titleFontFamily",
      FontWeight:"titleFontWeight",
      LetterSpacing:"titleLetterSpacing",
  }

  const subTitlePropsList={
    Color:"subTitleColor",
    Italic:"subTitleItalic",
    Underline:"subTitleUnderline",
    Transform:"subTitleTransform",
    FontFamily:"subTitleFontFamily",
    FontWeight:"subTitleFontWeight",
    LetterSpacing:"subTitleLetterSpacing",
}

  return (
    <div className="">
      <Tabs defaultActiveKey="1" size="large" centered>
        <TabPane tab="Content" key="1">
          <Form layout="vertical">
          <TextProps setProp={setProp} props={props} value={props.title} name="title"  propsName={titlePropsList}/>
          <TextProps setProp={setProp} props={props} value={props.subtitle} name="subtitle" propsName={subTitlePropsList} />
          <Image setProp={setProp} props={props} value={props.image} name="image" />
          </Form>
        </TabPane>
        <TabPane tab="Background" key="2">
        <Form layout="vertical">
          <Backgroundprops props={props} setProp={setProp} />
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Setting;
