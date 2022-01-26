import React from "react";
import { Typography, Space, Image } from "antd";
const { Title } = Typography;

const imageList = [
  {
    image: "Image 1",
    src: "https://images.unsplash.com/photo-1641495053705-cf075ef15811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    image: "Image 2",
    src: "https://images.unsplash.com/photo-1641508092482-02bc07aa92d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    image: "Image 3",
    src: "https://images.unsplash.com/photo-1641487379327-0c271bae490c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    image: "Image 4",
    src: "https://images.unsplash.com/photo-1641474391331-461f724680c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1814&q=80",
  },
];

const RecentImage = ({ setProp,property }) => {
  return (
    <div className="pt-6 overflow-y-scroll">
      <Space direction="vertical">
        <Title underline level={5}>
          Recent Upoaded Image
        </Title>
        <div className="flex items-center justify-center mx-auto flex-col ">
          {imageList.map((image, index) => {
            return (
              <div>
                <Image
                  width={200}
                  preview={false}
                  onClick={(e) => {
                    setProp((prop) => (prop.image = image.src));
                  }}
                  src={image.src}
                />
              </div>
            );
          })}
        </div>
      </Space>
    </div>
  );
};

export default RecentImage;
