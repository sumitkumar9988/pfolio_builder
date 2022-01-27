import React,{useState} from 'react';
import {  Button, Image,Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from '@ant-design/icons';
import ImageProps from "./ImageProps";
const Index = ({value,setProp,name}) => {
  const [ImageDrawer, setimageDrawer] = useState(false);
  const onOpenSidebar = (e) => {
    e.preventDefault();
    setimageDrawer(true);
  };
  const onCloseSidebar = (e) => {
    e.preventDefault();
    setimageDrawer(false);
  };
  return (
    <div>
 <div className="flex items-center justify-center mx-auto">
     {
       value?(
        <div className="relative top-0 flex flex-col text-center mx-auto">
        <div className=" pt-4 group container flex mx-auto items-center justify-center">
          <div className="">
            <Image
              width={240}
              preview={false}
              className="group-hover:blur-sm transition duration-150 delay-75"
              src={value}
            />

            <div className="hidden group-hover:block transition delay-200 duration-150 pt-4">
              <Button
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={onOpenSidebar}
                icon={<UploadOutlined />}
              >
                Change Image
              </Button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
       ):(
        <Button type="primary" icon={<PlusOutlined />} onClick={onOpenSidebar} size="large">
        Add Image
      </Button>
       )
     } 
    </div>
    <Drawer
        title="Change Image"
        width={320}
        closable={false}
        onClose={onCloseSidebar}
        visible={ImageDrawer}
      >
          <ImageProps  value={value} name={name} setProp={setProp}/>
      </Drawer>
    </div>
   
  );
};

export default Index;
