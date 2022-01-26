import React from 'react';
import { useNode, useEditor } from "@craftjs/core";
import Setting from "./Setting";
import ContentEditable from "react-contenteditable";

const Index = () => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return <div ref={connect}>
       <div className="bg-[#F2F4F6] overflow-y-hidden">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-[#D9E5F3] md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <p className="text-xl md:text-2xl  lg:w-10/12 text-[#11111] font-semibld leading-6 lg:leading-10 md:text-left text-center">
                        #1. Project name
                      </p>
                      <p className="text-base lg:w-10/12 text-[#2C2C2C] font-semibld leading-6 md:text-left text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Malesuada convallis pulvinar et tristique tristique
                        viverra neque.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://res.cloudinary.com/sumit9988/image/upload/v1642754526/unsplash_ir5lIkVFqC4_zsdawv.png"
                      alt="Project "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>;
};

export default Index;
