import React from "react";
import { Image, Typography, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Index = ({ openImageDrawer,image,setProp }) => {
  return (
    <>
      <div className="relative top-0 flex flex-col text-center mx-auto">
        <div className=" pt-4 group container flex mx-auto items-center justify-center">
          <div className="">
            <Image
              width={240}
              preview={false}
              className="group-hover:blur-sm transition duration-150 delay-75"
              src={image}
            />

            <div className="hidden group-hover:block transition delay-200 duration-150 pt-4">
              <Button
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={openImageDrawer}
                icon={<UploadOutlined />}
              >
                Change Image
              </Button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
