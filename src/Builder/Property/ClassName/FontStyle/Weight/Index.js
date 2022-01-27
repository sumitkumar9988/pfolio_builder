import React from 'react';
import { Form,  Radio } from 'antd';

const Index = ({setProp,propsName,props}) => {
  const onChange = e => {
     setProp((props) => (props[`${propsName.FontWeight}`] = e.target.value));
  };
  return <div>
        <Radio.Group  onChange={onChange} value={props[`${propsName.FontWeight}`]}>
          <Radio.Button value="font-normal">Normal</Radio.Button>
          <Radio.Button value="font-semibold">Bold</Radio.Button>
          <Radio.Button value="font-black">Extrabold</Radio.Button>
        </Radio.Group>
  </div>;
};

export default Index;
