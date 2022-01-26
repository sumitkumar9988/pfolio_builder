import React from "react";
import { Element } from "@craftjs/core";
// import Block from './../Builder/Components/Block/Index'
// import { Button } from "./../Builder/Components/Button/Index";
import { Container } from "./../Builder/Components/Container/Index";
import { Image } from "./../Builder/Components/Image/Index";
import { Text } from "./../Builder/Components/Text/Index";
// import icon from './../Builder/Components/Icon/Index'

const Sample2 = () => {
  return (
    <Container>
      <Element
        id="Sample2"
        is={Container}
        canvas
        classes={["w-full h-full pt-16 overflow-hidden bg-black lg:h-screen"]}
      >
        <div class="flex flex-col w-full ml-8 md:ml-16 ">
          <Text
            text="  Get started with <br />
              Landify today."
            classes="font-sans text-2xl font-extrabold text-left text-white md:leading-normal drop-shadow-sm md:text-5xl "
          ></Text>
        </div>
        <Element
          is={Container}
          id="Sample1-block3"
          classes={["relative flex items-center justify-center mt-28"]}
        >
          <Image
            src="https://res.cloudinary.com/sumit9988/image/upload/v1625253168/Screen_uedkgi.png"
            alt="dashboard"
            class="bg-cover"
          />
        </Element>
      </Element>
    </Container>
  );
};

Sample2.craft = {
  displayName: "Sample2",
};

export default Sample2;

{
  /* <Element id="Sample2-Block2" classes="flex items-lef">
<Text  text="Sign up for a free account" classes="pt-8 font-sans text-sm font-medium text-green-500 ">
</Text>
{/* <div className="pt-8 ml-1 text-green-500 pt-">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</div> */
}
//</Element> */}
