import React, { useState, useRef } from "react";
import { Layout } from "antd";
import cleaner from "clean-html";
import { Editor } from "@craftjs/core";
import MainBar from "./Containers/MainBar.js";
import { Container } from "./Builder/Components/Container/Index";
import { Link } from "./Builder/Components/Link/Index";
import { Text } from "./Builder/Components/Text/Index";
import { Image } from "./Builder/Components/Image/Index";
import { Block } from "./Builder/Components/Block/Index";
import { Icon } from "./Builder/Components/Icon/Index";
import { Button } from "./Builder/Components/Button/Index";
import Canvas from "./Builder/Canva/Canvas";
import RenderNode from "./Builder/RenderNode/Index";
import Setting from "./Components/Setting/Index";
import Menu from "./Bar";
import Codedrawer from "./Components/Drawer/Code/Code.js";
import Header from "./Components/Header/Header";
import Header1 from "./Builder/Blocks/Header1/Index";
import Sample2 from "./Builder/Blocks/Project1/Index";
import Sample3 from "./Builder/Blocks/Project2/Index";
import Sample4 from "./Builder/Blocks/Experience1/Index";

// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons';

// const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setcollapsed] = useState(true);
  const [code, setCode] = useState("");
  const [previewWidth, setPreviewWidth] = useState("w-full");
  const [openCodeDrawer, setOpenCodedrawer] = useState(false);

  const codeRef = useRef(null);
  function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
  }
  const exportCode = () => {
    const data = codeRef.current.firstChild;
    cleaner.clean(nodeToString(data), function (html) {
      let formatCode=`<html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
      ${html}
      </body>
      </html>`
      setCode(formatCode);
    });
  };

  return (
    <div className="overflow-hidden overflow-y-hidden bg-gray-100 h-screen">
      <Editor
        resolver={{
          Container,
          Block,
          Link,
          Text,
          Image,
          Icon,
          Canvas,
          Button,
          Header1,
          Sample2,
          Sample3,
          Sample4,
        }}
        onRender={RenderNode}
      >
     
        <Layout className="h-screen overflow-hidden ">
          <Header
            exportCode={exportCode}
            setOpenCodedrawer={setOpenCodedrawer}
            setPreviewWidth={setPreviewWidth}
          />
          <Menu collapsed={collapsed} />

          <Layout.Content>
          <MainBar
              setCode={setCode}
              codeRef={codeRef}
              width={previewWidth}
              code={code}
              collapsed={collapsed}
              setcollapsed={setcollapsed}
            />
          </Layout.Content>
        </Layout>
      <Setting  />
      </Editor>
      <Codedrawer
        code={code}
        openCodeDrawer={openCodeDrawer}
        setOpenCodedrawer={setOpenCodedrawer}
      />
    </div>
  );
};

export default App;



// {}