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
            <div className="bg-[#F2F4F6]">
        <div className="flex justify-center items-center mx-auto flex-col ">
          <div className="pt-20  w-full md:w-9/12 mx-auto">
            <p className="text-2xl font-semibold text-center text-[#111111]">
              {" "}
              #3. Project name
            </p>
            <p className="text-base  font-normal mx-4   text-[#5A5959]  text-center  leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              convallis pulvinar et tristique tristique viverra neque. Id
              malesuada diam sit ornare.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Malesuada convallis pulvinar et tristique
              tristique viverra neque. Id malesuada diam sit ornare.
            </p>

            <div className="item-center text-center mt-4">
              <a
                className="text-lg w-full mx-auto text-center font-semibold  text-[#2B8EE9]"
                href="link"
              >
                Read More
              </a>
            </div>
            <div className="pt-4">
              <img
                src="https://res.cloudinary.com/sumit9988/image/upload/v1642755222/Group_6_jm3l4s.png"
                className="w-full"
                alt="Project"
              />
            </div>
          </div>
        </div>
      </div>

  </div>;
};

export default Index;
