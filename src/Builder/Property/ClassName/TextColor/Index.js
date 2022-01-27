import React from "react";
import { TwitterPicker } from "react-color";

const Index = ({setProp,propsName,props}) => {

    const onSetColor=(color)=>{
        setProp((props) => (props[`${propsName.Color}`] = color.hex))
    }
  return (
    <div>
      <TwitterPicker  color={props[`${propsName.Color}`]} onChangeComplete={onSetColor} triangle="hide"/>
    </div>
  );
};

export default Index;
