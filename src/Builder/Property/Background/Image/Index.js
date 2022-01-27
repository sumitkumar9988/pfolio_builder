import React from "react";
import Image from "./../../Basic/Image/Index.js";

const Index = ({ props, setProp }) => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <Image
        value={props.backgroundImage}
        setProp={setProp}
        name="backgroundImage"
      />
    </div>
  );
};

export default Index;
