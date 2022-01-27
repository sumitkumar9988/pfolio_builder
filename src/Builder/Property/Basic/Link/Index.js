import React, { useState } from "react";
import { Button, Form, Input, Drawer, Checkbox } from "antd";
import StylePropList from "./Style";
const Index = ({ setProp, name, props, propsName, value,url,openInnewTab ,urlName}) => {
  const [textStyleSidebar, setTextStyleSidebar] = useState(false);
  const onOpenSidebar = (e) => {
    e.preventDefault();
    setTextStyleSidebar(true);
  };
  const onCloseSidebar = (e) => {
    e.preventDefault();
    setTextStyleSidebar(false);
  };

  console.log(props.name)
  console.log("vv",value);
  return (
    <div>
      <Form.Item
        label={`Edit ${name}`}
        size="large"
        tooltip={`Change ${name} Title of selected Item`}
      >
        <Input
          placeholder={`Enter title`}
          value={props[`${name}`]}
          defaultValue={value}
          onChange={(e) =>
            setProp((props) => (props[`${name}`] = e.target.value))
          }
        />
        <div className="pt-2">
          <Input
            placeholder={`Enter URL`}
            value={url}
            defaultValue={props[`${url}`]}
            onChange={(e) =>
              setProp((props) => (props[`${urlName}`] = e.target.value))
            }
          />
          <div className="pt-2">
            <Checkbox >Open In New Tabs</Checkbox>
          </div>
          <div className="pt-2">
            <Button type="dashed" onClick={onOpenSidebar} size="small">
              Edit style
            </Button>
          </div>
        </div>
      </Form.Item>
      <Drawer
        title="Change Text Style"
        width={320}
        closable={false}
        onClose={onCloseSidebar}
        visible={textStyleSidebar}
      >
        <Form layout="vertical">
          <StylePropList
            setProp={setProp}
            propsName={propsName}
            name={name}
            props={props}
          />
        </Form>
      </Drawer>
    </div>
  );
};

export default Index;
