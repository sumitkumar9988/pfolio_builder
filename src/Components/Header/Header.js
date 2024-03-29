import React from "react";
import lz from "lzutf8";
import { Button, Tooltip } from "antd";
import { Layout } from "antd";
import { useEditor } from "@craftjs/core";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  EyeOutlined,
  CodeOutlined,
  CheckOutlined,
  MobileOutlined,
  LaptopOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { ReactComponent as DarkLogo } from "./../../Asset/pfolio.svg";

const Index = ({ exportCode, setOpenCodedrawer, setPreviewWidth }) => {
  const { actions, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const showCode = () => {
    setOpenCodedrawer(true);
    exportCode();
  };



  return (
    <div>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 30,
          width: "100%",
          backgroundColor: "#1a202c",
        }}
      >
        <div className="w-full h-full flex flex-row justify-between">
          <div className="text-white px-2 md:px-4 py-5">
            <DarkLogo />
          </div>
          <div>
            {enabled ? (
              <div className="flex flex-row items-center justify-center  gap-10">
                <div className="flex flex-row  gap-2">
                  <div>
                    <Tooltip title="Undo" placement="top">
                      <Button
                        icon={<DoubleLeftOutlined />}
                        style={{background:"#fff",borderColor: "#8B5CF6"}}
                        onClick={() => actions.history.undo()}
                      />
                    </Tooltip>
                  </div>
                  <div>
                    <Tooltip title="Redo" placement="top">
                      <Button
                        icon={<DoubleRightOutlined />}
                        style={{background:"#fff",borderColor: "#8B5CF6"}}
                        onClick={() => actions.history.redo()}
                      />
                    </Tooltip>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <Tooltip title="View" placement="top">
                      <Button
                        icon={<EyeOutlined />}
                        style={{background:"#fff",borderColor: "#8B5CF6"}}
                        onClick={() => {
                          exportCode();
                          actions.setOptions(
                            (options) => (options.enabled = !enabled)
                          );
                        }}
                      />
                    </Tooltip>
                  </div>
                  <div>
                    <Tooltip title="Export Code" placement="top">
                      <Button onClick={showCode} style={{background:"#fff",borderColor: "#8B5CF6"}} icon={<CodeOutlined />} />
                    </Tooltip>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-center  gap-2">
                <div>
                  <Tooltip title="Laptop view" placement="top">
                    <Button
                      onClick={() => setPreviewWidth("w-full")} style={{background:"#fff",borderColor: "#8B5CF6"}}
                      icon={<LaptopOutlined />}
                    />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Tablet view" placement="top">
                    <Button
                      onClick={() => setPreviewWidth("w-[900px]")}
                      style={{background:"#fff",borderColor: "#8B5CF6"}}
                      icon={<TabletOutlined />}
                    />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Mobile view" placement="top">
                    <Button
                      onClick={() => setPreviewWidth("w-[450px]")}
                      style={{background:"#fff",borderColor: "#8B5CF6"}}
                      icon={<MobileOutlined />}
                    />
                  </Tooltip>
                </div>
              </div>
            )}
          </div>

          {enabled ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <Button style={{background:"#fff",borderColor: "#8B5CF6"}}>Save</Button>
              <Button style={{background:"#8B5CF6",borderColor: "#8B5CF6"}} type="primary">Publish</Button>
            </div>
          ) : (
            <div>
              <Button
                type="primary"
                icon={<CheckOutlined />}
                style={{background:"#8B5CF6",borderColor: "#8B5CF6"}}
                onClick={() => {
                  actions.setOptions((options) => (options.enabled = !enabled));
                }}
              />
            </div>
          )}
        </div>
      </Layout.Header>
    </div>
  );
};

export default Index;
