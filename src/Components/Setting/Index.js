import React from "react";
import { Drawer, Button, Space,Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEditor } from '@craftjs/core';
import * as alias from "../../redux/constant";
import {
  MessageOutlined
} from '@ant-design/icons';

const Index = ({}) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.settingDrawer);
  
  const closeLeftDrawer = (e) => {
    e.preventDefault();
    dispatch({ type: alias.SETTING_RIGHT_DRAWER_CLOSE });
    // setLeftDrawer(false);
  };

  const {  selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });



  return (
    <div className="z-50">
     { selected&& <Drawer
        title={`Edit ${selected && selected.name}`}
        placement="right"
        width={440}
        closable={false}
        onClose={closeLeftDrawer}
        autoFocus={false}
        push={true}
        visible={selected&& open}
        extra={
          <Space>
            <Tooltip title="Help and feedback"><Button  icon={<MessageOutlined />}/></Tooltip>
          </Space>
        }
      >
        <div data-cy="settings-panel" className="flex flex-col  overflow-y-scroll">
          {/* Component Setting Import */}
          {selected && selected.settings  ? React.createElement(selected.settings) : null }
        </div>
        {/* Drawer To Choose Image and Logo */}
     
      </Drawer>}
    </div>
  );
};

export default Index;
