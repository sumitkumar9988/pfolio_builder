import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
const Index = () => {
  return <div>
        <Radio.Group >
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
  </div>;
};

export default Index;
