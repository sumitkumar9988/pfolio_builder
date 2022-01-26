import React, { useRef } from "react";
import { Layout } from "antd";
import { Block } from ".././Builder/Components/Block/Index";
import { useEditor } from "@craftjs/core";
import { Frame, Element } from "@craftjs/core";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;

const MainBar = ({ codeRef, width, code, collapsed, setcollapsed }) => {
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));



  return (
    <>
      <Layout className=" h-full overflow-scroll">
        {enabled && (
          <div className="">
            <div
              className="fixed  p-4 bottom-4"
              onClick={() => setcollapsed((prev) => !prev)}
            >
              <div className="bottom-0 flex w-12 h-12 transition delay-75 bg-red-400 rounded-full left-2 hover:scale-110">
                <div className="items-center justify-center mx-auto ">
                  <PlusCircleOutlined
                    style={{ fontSize: "24px" }}
                    className="pt-3 "
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`bg-gray-100  ${enabled ? "mx-20 mt-12" : ""}  `}>
          <Content className="pt-16 pb-20">
            {enabled ? (
              <div className="editor craftjs-renderer">
                <div className="bg-white min-h-screen mx-auto w-full overflow-y-scroll page-container">
                  {/* <IFrame> */}
                  <div ref={codeRef}>
                    <Frame>
                      <Element canvas is={Block}></Element>
                    </Frame>
                  </div>
                  {/* </IFrame> */}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center  overflow-y-hidden   mx-auto ">
<div className={`min-h-screen bg-white border-2 border-green-400 ${width}`}>
                <iframe
                  title={"visual-iframe"}
                  className={`w-full min-h-screen`}
                  srcDoc={code}
                />
              </div>
              </div>
              
            )}
          </Content>
        </div>
      </Layout>
    </>
  );
};

export default MainBar;

// // <Layout className=" min-h-screen overflow-auto">
// // {enabled ? (
// //   <div style={{ marginLeft: 400 }} className="bg-gray-200">
// //     <Content className="pt-16">
// //         <div className='editor craftjs-renderer'>
// //         <div className="bg-white min-h-screen mx-auto w-full overflow-y-scroll page-container">
// //         <div ref={codeRef} >
// //           <Frame>
// //             <Element canvas is={Block}></Element>
// //           </Frame>
// //         </div>
// //       </div>
// //         </div>

// //     </Content>
// //   </div>
// // ) : (
// //   <div>
// //     <Content className="pt-16">
// //       <div className="min-h-screen">
// //         <ReactFrame>
// //           {IframeCode}
// //         </ReactFrame>
// //         {/* <iframe
// //           title={"visual-iframe"}
// //           className={`visual-iframe`}
// //           srcDoc={
// //           "  "
// //           }
// //         /> */}
// //         {/* <ReactFrame>

// //             </ReactFrame> */}
// //       </div>
// //     </Content>
// //   </div>
// //   // <div className={`bg-white mx-auto h-full  ${width}` }>
// //   // </div>
// // )}
// // </Layout>

// import React from 'react';

// const MainBar = ({collapsed, setcollapsed }) => {
//   return <div className="bg-white pt-40 px-40 mx-20 w-full h-80">
//     <p>aaa</p>

//   </div>;
// };

// export default MainBar;
