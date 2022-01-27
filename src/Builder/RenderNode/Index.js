import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import * as alias from "../../redux/constant";
import shortid from "shortid";
import { Button, Tooltip } from "antd";
import "./Index.css";
import {
  ArrowUpOutlined,
  DeleteOutlined,
  DragOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const RenderNode = ({ render }) => {
  const { id } = useNode();
  const dispatch = useDispatch();

  const { actions, query, isActive, selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
      };
    }

    return {
      selected,
      isActive: query.getEvent("selected").contains(id),
      isEnabled: state.options.enabled,
    };
  });

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  console.log(name);

  const currentRef = useRef();

  const onOpenSettingDrawer = (e) => {
    e.preventDefault();
    
    dispatch({ type: "SETTING_RIGHT_DRAWER_UPEN" });
  };

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);
  // const getCloneTree = useCallback((idToClone) => {
  //   const tree = query.node(idToClone).toNodeTree();
  //   const newNodes = {};

  //   const changeNodeId = (node, newParentId) => {
  //     const newNodeId = shortid();
  //     const childNodes = node.data.nodes.map((childId) =>
  //       changeNodeId(tree.nodes[childId], newNodeId)
  //     );
  //     const linkedNodes = Object.keys(node.data.linkedNodes).reduce(
  //       (accum, id) => {
  //         const newNodeId = changeNodeId(
  //           tree.nodes[node.data.linkedNodes[id]],
  //           newNodeId
  //         );
  //         return {
  //           ...accum,
  //           [id]: newNodeId
  //         };
  //       },
  //       {}
  //     );

  //     newNodes[newNodeId] = {
  //       ...node,
  //       id: newNodeId,
  //       data: {
  //         ...node.data,
  //         parent: newParentId || node.data.parent,
  //         nodes: childNodes,
  //         linkedNodes
  //       }
  //     };
  //     return newNodeId;
  //   };

  //   const rootNodeId = changeNodeId(tree.nodes[tree.rootNodeId]);
  //   return {
  //     rootNodeId,
  //     nodes: newNodes
  //   };
  // }, []);

  const insertNodeOnParent = (nodeId, parentId, indexToInsert) => {
    const node = query.node(nodeId).get();
    const freshNode = {
      data: {
        ...node.data,
        nodes: [],
      },
    };
    const nodeToAdd = query.parseFreshNode(freshNode).toNode();
    actions.add(nodeToAdd, parentId, indexToInsert);
    if (node.data.nodes.length === 0) {
      return;
    }
    node.data.nodes.forEach((childNode, index) => {
      insertNodeOnParent(childNode, nodeToAdd.id, index);
    });
  };

  // const handleClone = (e, id) => {
  //   e.preventDefault();
  //   const theNode = query.node(id).get();
  //   const parentNode = query.node(theNode.data.parent).get();
  //   const indexToAdd = parentNode.data.nodes.indexOf(id);
  //   const tree = getCloneTree(id);
  //   actions.addNodeTree(tree, parentNode.id, indexToAdd + 1);
  // };

  const duplicateNode = (id) => {
    let parent = query.node(id).get().data.parent;
    const parentNode = query.node(parent).get();
    const indexToAdd = parentNode.data.nodes.indexOf(id) + 1;
    insertNodeOnParent(id, parent, indexToAdd);
  };

  return (
    // isHover || isActive on hover and Active on click
    <>
      {(isActive)
        ? ReactDOM.createPortal(
            <div
              ref={currentRef}
              className="fixed flex items-center px-2 py-1 -mt-8 text-white   bg-primary z-30"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 30,
              }}
            >
             { selected.name !== "Block" ? (
               <Button size="medium" type="primary" onClick={onOpenSettingDrawer}>
               Edit component
             </Button>
             ):""} 
              {id !== ROOT_NODE && (
                <div>
                  {" "}
                  <Tooltip title="Move Up">
                    <Button
                      size="medium"
                      type="primary"
                      onClick={() => {
                        actions.selectNode(parent);
                      }}
                      icon={<ArrowUpOutlined />}
                    />
                  </Tooltip>
                </div>
              )}
              {moveable && (
                <Tooltip title="Move Components">
                  <Button size="medium" type="primary" ref={drag} icon={<DragOutlined />} />
                </Tooltip>
              )}
              {selected && selected.name === "Container" ? (
                <Tooltip title="Copy Components">
                  <Button
                    size="medium"
                    type="primary"
                    onClick={(e) => {
                      duplicateNode(selected.id);
                    }}
                    icon={<CopyOutlined />}
                  />
                </Tooltip>
              ) : null}
              {deletable ? (
                <Tooltip title="Delete Components">
                  <Button
                    size="medium"
                    type="primary"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      actions.delete(id);
                    }}
                    icon={<DeleteOutlined />}
                  />
                </Tooltip>
              ) : null}
            </div>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};

export default RenderNode;
