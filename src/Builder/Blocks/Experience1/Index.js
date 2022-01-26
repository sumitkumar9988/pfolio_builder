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
               <div className="bg-[#F2F4F6]" >
        <div className="flex justify-center items-center flex-col relative">
          <div className="2xl:px-20  static  flex flex-col justify-center items-center px-4 md:px-6 py-20 ">
            <p className="text-xl md:text-2xl font-bold tracking-wider  text-center text-[#2C2C2C]">
              Testimonials
            </p>
            <div className="grid mt-12 w-full  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center gap-6 md:gap-6 xl:gap-8">
              <div className="cursor-pointer  flex flex-col   justify-center items-center">
                <img
                  className="-mb-6 md:-mb-8 xl:-mb-10  w-12 md:w-16 xl:w-auto "
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1642756021/unsplash_jzY0KRJopEI_i5qaou.png"
                  alt="billing"
                />
                <div className="flex-col transition duration-500 hover:shadow-2xl w-full border py-14 px-8 flex justify-center items-center bg-white shadow  rounded-md border-gray-200">
                  <p className="w-full text-lg font-medium text-center text-[#2B8EE9]">
                    Theresa Webb
                  </p>
                  <p className="w-full text-lg font-medium text-center text-gray-800">
                    Product Manager at ADPList
                  </p>
                  <p className="w-full md:w-72 xl:w-80 mt-4 text-base  text-center text-gray-600">
                    “Amazing service! Claire helped me to reduce the shipping
                    price a little and shipped it immediately after purchasing.
                    The amethyst cave I got is a beauty and I c...”
                  </p>
                </div>
              </div>
              <div className="cursor-pointer  flex flex-col   justify-center items-center">
                <img
                  className="-mb-6 md:-mb-8 xl:-mb-10  w-12 md:w-16 xl:w-auto "
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1642756020/unsplash_Id6U55AZMpg_mktbox.png"
                  alt="billing"
                />
                <div className="flex-col transition duration-500 hover:shadow-2xl w-full border py-14 px-8 flex justify-center items-center bg-white shadow  rounded-md border-gray-200">
                  <p className="w-full text-lg font-medium text-center text-[#2B8EE9]">
                    Jane Cooper
                  </p>
                  <p className="w-full text-lg font-medium text-center text-gray-800">
                    Web Designer at Infotech Ltd.
                  </p>
                  <p className="w-full md:w-72 xl:w-80 mt-4 text-base  text-center text-gray-600">
                    “Amazing service! Claire helped me to reduce the shipping
                    price a little and shipped it immediately after purchasing.
                    The amethyst cave I got is a beauty and I c...”
                  </p>
                </div>
              </div>
              <div className="cursor-pointer  flex flex-col   justify-center items-center">
                <img
                  className="-mb-6 md:-mb-8 xl:-mb-10  w-12 md:w-16 xl:w-auto "
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1642756019/unsplash_8PMvB4VyVXA_gk1kat.png"
                  alt="billing"
                />
                <div className="flex-col transition duration-500 hover:shadow-2xl w-full border py-14 px-8 flex justify-center items-center bg-white shadow  rounded-md border-gray-200">
                  <p className="w-full text-lg font-medium text-center text-[#2B8EE9]">
                    Guy Hawkins
                  </p>
                  <p className="w-full text-lg font-medium text-center text-gray-800">
                    Product Designer at Dell Ltd.
                  </p>
                  <p className="w-full md:w-72 xl:w-80 mt-4 text-base  text-center text-gray-600">
                    “Amazing service! Claire helped me to reduce the shipping
                    price a little and shipped it immediately after purchasing.
                    The amethyst cave I got is a beauty and I c...”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>;
};

export default Index;
