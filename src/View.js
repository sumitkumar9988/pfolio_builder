import React, { useRef } from "react";
import { Layout } from "antd";
import { Carousel } from "antd";
import {
  LaptopOutlined,
  TabletOutlined,
  MobileOutlined,
} from "@ant-design/icons";

import "./decive.min.css";
const View = () => {
  const contentStyle = {
    height: "1000px",
    width: "100vw",
    textAlign: "center",
    background: "#1a202c",
  };

  const carouselRef = React.createRef();

  return (
    <div className="">
      <Layout.Header style={{ backgroundColor: "#2d3748" }}>
        <div className="h-full w-full flex justify-center items-center mx-auto gap-6">
          <div
            onClick={() => {
              carouselRef.current.goTo(0, 0);
            }}
          >
            <LaptopOutlined style={{ fontSize: "28px", color: "#f7fafc" }} />
          </div>
          <div
            onClick={() => {
              carouselRef.current.goTo(1, 1);
            }}
          >
            <MobileOutlined style={{ fontSize: "28px", color: "#f7fafc" }} />
          </div>
          <div
            onClick={() => {
              carouselRef.current.goTo(2, 2);
            }}
          >
            <TabletOutlined style={{ fontSize: "28px", color: "#f7fafc" }} />
          </div>
        </div>
      </Layout.Header>
      <Carousel dotPosition="top" dots={false} ref={carouselRef}>
        <div>
          <div style={contentStyle}>
            <div className="pt-4 ">
              <div class="marvel-device macbook">
                <div class="top-bar"></div>
                <div class="camera"></div>
                <div class="screen">{/* Content */}</div>
                <div class="bottom-bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="pt-4 ">
              <div class="marvel-device iphone-x">
                <div class="notch">
                  <div class="camera"></div>
                  <div class="speaker"></div>
                </div>
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="bottom-bar"></div>
                <div class="volume"></div>
                <div class="overflow">
                  <div class="shadow shadow--tr"></div>
                  <div class="shadow shadow--tl"></div>
                  <div class="shadow shadow--br"></div>
                  <div class="shadow shadow--bl"></div>
                </div>
                <div class="inner-shadow"></div>
                <div class="screen">{/* Content */}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="pt-4 pb-10">
              <div class="marvel-device ipad black">
                <div class="camera"></div>
                <div class="screen">{/* Content */}</div>
                <div class="home"></div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default View;
