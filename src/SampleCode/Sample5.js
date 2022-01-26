import React from "react";
import { Element } from "@craftjs/core";
// import Block from './../Builder/Components/Block/Index'
import { Button } from "./../Builder/Components/Button/Index";
import { Container } from "./../Builder/Components/Container/Index";
// import Image from './../Builder/Components/Image/Index'
import { Text } from "./../Builder/Components/Text/Index";
// import icon from './../Builder/Components/Icon/Index'

const Sample5 = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="grid items-center gap-8 pt-16 md:mx-28 lg:mx-44 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex justify-center pt-8 text-center">
          <p className="text-2xl font-black">Some of my recent work</p>
        </div>
        <div className="flex flex-col ">
          <div className="">
            <img
              src="https://res.cloudinary.com/sumit9988/image/upload/v1625258929/Cover_nxqkou.png"
              alt="dashboard"
            />
          </div>
          <div>
            <p className="text-xl font-extrabold">Project Title</p>
            <p className="pt-2 text-sm font-normal">iOS, IoT</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="">
            <img
              src="https://res.cloudinary.com/sumit9988/image/upload/v1625258876/Cover_mpp7ev.png"
              alt="dashboard"
            />
          </div>
          <div>
            <p className="text-xl font-extrabold">Project Title</p>
            <p className="pt-2 text-sm font-normal">Android, IoT</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="">
            <img
              src="https://res.cloudinary.com/sumit9988/image/upload/v1625258844/Cover_yvp9ai.png"
              alt="dashboard"
            />
          </div>
          <div>
            <p className="text-xl font-extrabold">Project Title</p>
            <p className="pt-2 text-sm font-normal">Web app</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Sample5.craft = {};

export default Sample5;
