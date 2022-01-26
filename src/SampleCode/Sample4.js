import React from "react";
import { Element } from "@craftjs/core";
// import Block from './../Builder/Components/Block/Index'
import { Button } from "./../Builder/Components/Button/Index";
import { Container } from "./../Builder/Components/Container/Index";
import { Image } from "./../Builder/Components/Image/Index";
import { Text } from "./../Builder/Components/Text/Index";
// import icon from './../Builder/Components/Icon/Index'
const Sample4 = () => {
  return (
    // <Container backgroundColor="#111111" className="pt-16 pb-16">
      <Container id="Sample3">
        <Container
          id="Sample3-Item1"
          classes={["flex justify-center pt-8 text-center"]}
        >
          <Text
            text="Selected works"
            color="text-gray-300"
            fontSize="text-4xl"
            classes={[""]}
          ></Text>
        </Container>
        <Element
          is={Container}
          id="Sample3-Item2"
          classes={[
            "grid gap-2 pt-8 md:mx-28 lg:mx-44 items-centersm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          ]}
        >
          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1611048268283-11b289133fa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="dashboard"
            />
          </Element>

          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt="dashboard"
            />
          </Element>
          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="dashboard"
            />
          </Element>
          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="dashboard"
            />
          </Element>
          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="dashboard"
            />
          </Element>
          <Element
            is={Container}
            id="Sample3-Item2-Image"
            classes={["relative flex flex-col bg-center"]}
          >
            <Image
              classes={["w-full h-full bg-center bg-cover rounded "]}
              src="https://images.unsplash.com/photo-1618296498428-475b880e5b0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
              alt="dashboard"
            />
          </Element>
        </Element>
      </Container>
    // </Container>
  );
};

Sample4.craft = {};

export default Sample4;
