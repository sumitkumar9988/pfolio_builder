import React from "react";
import { TwitterPicker } from "react-color";

const Index = ({ setProp, props }) => {
    const onSetColor=(color)=>{
        console.log(color)
        setProp((props) => (props.backgroundColor = color.hex))
    }
  return (
    <div>
      <TwitterPicker width={350} color={props.backgroundColor} onChangeComplete={onSetColor} triangle="hide"/>
    </div>
  );
};

export default Index;
