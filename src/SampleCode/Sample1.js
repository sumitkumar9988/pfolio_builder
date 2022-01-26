import React from "react";
import { Element } from "@craftjs/core";
// import Block from './../Builder/Components/Block/Index'
import { Button } from "./../Builder/Components/Button/Index";
import { Container } from "./../Builder/Components/Container/Index";
// import Image from './../Builder/Components/Image/Index'
import { Text } from "./../Builder/Components/Text/Index";
// import icon from './../Builder/Components/Icon/Index'

const Sample1 = () => {
  return (
    <Container>
      <Element
        is={Container}
        id="Sample1-block1"
        classes={["flex flex-col items-center justify-center w-full "]}
      >
        <Text
          text="Hey! I am sumit<br />
            founder of pfolio"
          classes={[
            "font-sans ",
            "text-2xl",
            "font-extrabold",
            "text-center",
            "text-gray-900",
            "md:leading-relaxed",
            "drop-shadow-sm",
            "md:text-5xl",
          ]}
        ></Text>
        {/* <Button
          text="Download Now"
          classes={["px-4 py-2 text-base font-bold text-white rounded-md mt-7 bg-Purple hover:opacity-90"]}
        ></Button> */}
      </Element>
    </Container>
  );
};

Sample1.craft = {};

export default Sample1;
