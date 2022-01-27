import React, { useState } from "react";
import { Button, Form, Input, Drawer } from "antd";
import StylePropList from "./Style";
const Index = ({ setProp, name, props, propsName, value }) => {
  const [textStyleSidebar, setTextStyleSidebar] = useState(false);
  const onOpenSidebar = (e) => {
    e.preventDefault();
    setTextStyleSidebar(true);
  };
  const onCloseSidebar = (e) => {
    e.preventDefault();
    setTextStyleSidebar(false);
  };
  return (
    <div>
      <Form.Item
        label={`Edit ${name}`}
        size="large"
        tooltip="Change subheading Title of selected Item"
      >
        <Input.TextArea
          placeholder="input subheading"
          autoSize={{ minRows: 2, maxRows: 6 }}
          value={value}
          onChange={(e) =>
            setProp((props) => (props[`${name}`] = e.target.value))
          }
        />
        <div className="pt-2">
          <Button type="dashed" onClick={onOpenSidebar} size="small">
            Edit style
          </Button>
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
