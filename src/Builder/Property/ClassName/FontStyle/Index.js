import React from "react";
import Alignment from "./Alignment/Index";
import Italic from "./Italic/Index";
import Transform from "./Transform/Index";
import Underline from "./Underline/Index";
import Weight from "./Weight/Index";

const Index = ({setProp,propsName,props}) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      {/* <Alignment /> */}
      <Transform setProp={setProp} propsName={propsName} props={props}/>
      <Weight setProp={setProp} propsName={propsName} props={props}/>
      <div className="flex flex-row">
      <Italic setProp={setProp} propsName={propsName} props={props}/>
      <Underline setProp={setProp} propsName={propsName} props={props}/>
      </div>
    </div>
  );
};

export default Index;
