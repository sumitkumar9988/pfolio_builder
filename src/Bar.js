import React from "react";
import { Image as ImageAntd, Divider, Menu, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEditor } from "@craftjs/core";
import Image1 from "./Asset/Block/Item1.png";
import Image2 from "./Asset/Block/Item2.png";
import Image3 from "./Asset/Block/Item3.png";
import Image4 from "./Asset/Block/Item4.png";
import Image5 from "./Asset/Block/Item5.png";

import Header1 from "./Builder/Blocks/Header1/Index";
import Sample2 from "./Builder/Blocks/Project1/Index";
import Sample3 from "./Builder/Blocks/Project2/Index";
import Sample4 from "./Builder/Blocks/Experience1/Index";
import Sample5 from "./SampleCode/Sample5";

const { Content, Sider } = Layout;

const Bar = ({ collapsed }) => {
  const { open } = useSelector((state) => state.settingDrawer);
  const {
    connectors: { create },
    enabled,
  } = useEditor((state, query) => ({
    state: state,
    enabled: state.options.enabled,
  }));
  return (
    <>
      {enabled && !open && (
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            left: 0,
          }}
          breakpoint="md"
          width="400"
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth="0"
        >
          <Menu mode="inline">
            <div className="w-full pb-32 overflow-scroll h-full  ">
              <div className=" flex items-center justify-center pt-28 mx-auto">
                <div className="mx-6">
                  <div ref={(ref) => create(ref, <Header1 />)}>
                    <ImageAntd src={Image1} className="bg-fill" width={300} />
                    <Divider />
                  </div>
                  <div ref={(ref) => create(ref, <Sample2 />)}>
                    <ImageAntd src={Image2} width={300} />
                    <Divider />
                  </div>
                  <div ref={(ref) => create(ref, <Sample3 />)}>
                    <ImageAntd src={Image3} width={300} />
                    <Divider />
                  </div>
                  {/* <div ref={(ref) => create(ref, <Sample4 />)}>
                    <ImageAntd src={Image4} width={300} />
                    <Divider />
                  </div>
                  <div ref={(ref) => create(ref, <Header1 />)}>
                    <ImageAntd src={Image5} width={300} />
                    <Divider />
                  </div> */}
                </div>
              </div>
            </div>
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default Bar;

{
  /* <div ref={(ref) => create(ref, <Sample1 />)}>
<ImageAntd src={Image1} width={300} />
<Divider />
</div> */
}

// onClick={() => {

//   const node = query.createNode(<Image/>);
//   actions.add(node, state.nodes.ROOT.data.nodes[0]);

// }}

// <Button
// ref={(ref) =>
//   create(ref, <ButtonContainer text="Click me" size="small" />)
// }
// variant="contained"
// data-cy="toolbox-button"
// >
// Button Drop
// </Button>

//  Button to Hide Sidebar
//           {/* <div>
//             <div
//               className="fixed p-4 bottom-4"
//               onClick={() => setcollapsed((prev) => !prev)}
//             >
//               <div className="bottom-0 flex w-12 h-12 transition delay-75 bg-red-400 rounded-full left-2 hover:scale-110">
//                 <div className="items-center justify-center mx-auto ">
//                   <PlusCircleOutlined
//                     style={{ fontSize: "24px"}}
//                     className="pt-3 "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
