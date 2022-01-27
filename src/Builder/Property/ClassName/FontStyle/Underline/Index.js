import React from 'react';
import { Form, Input, Button, Radio ,Checkbox} from 'antd';
const Index = ({setProp,propsName,props}) => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    if(e.target.checked){
    setProp((props) => (props[`${propsName.Underline}`] = "underline"));
    }else{
      setProp((props) => (props[`${propsName.Underline}`] = ""));
    }
  }
  return <div>
       <Checkbox onChange={onChange}>Underline</Checkbox>
  </div>;
};

export default Index;
