import React, { useState } from "react";
import { Drawer, Button, Space,Tooltip } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import Highlight from 'react-highlight'
import copy from "copy-to-clipboard";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; 

const Code = ({openCodeDrawer,setOpenCodedrawer,code}) => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const onClose = () => {
    setOpenCodedrawer(!openCodeDrawer)
  };
  return (
    <>
      <Drawer
        title={`Code Snippet`}
        placement="right"
        size="large"
        onClose={onClose}
        visible={openCodeDrawer}
        // visible="true"
        extra={
          <Space>
            <Tooltip title="Copy Code"><Button  icon={<CopyOutlined />} onClick={()=>(copy(code))}/></Tooltip>
          </Space>
        }
      >
        <Editor
      value={code}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
      </Drawer>

    </>
  );
};

export default Code;
