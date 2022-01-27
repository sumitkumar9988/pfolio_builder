import React from "react";
// import AddImage from "./Props/Uploader/Index.js";
import Recentimage from "./Props/RecentImage/Index.js";
const Image = ({setProp,name}) => {
  return (
    <div className="flex items-center justify-center mx-auto flex-col">
      {/* <AddImage /> */}
      <Recentimage setProp={setProp} name={name}/>
    </div>
  );
};

export default Image;