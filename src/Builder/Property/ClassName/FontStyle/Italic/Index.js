import React from 'react';
import { Form, Input, Button, Radio ,Checkbox} from 'antd';
const Index = ({setProp,propsName,props}) => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    if(e.target.checked){
    setProp((props) => (props[`${propsName.Italic}`] = "italic"));
    }else{
      setProp((props) => (props[`${propsName.Italic}`] = ""));
    }
  }
  return <div>
       <Checkbox onChange={onChange}>Italic</Checkbox>
  </div>;
};

export default Index;
