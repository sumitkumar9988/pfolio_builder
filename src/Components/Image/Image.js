import React from "react";
import AddImage from "./Image/AddImage";
import Recentimage from "./Image/RecentImage";
const Image = ({setProp,property}) => {
  return (
    <div className="flex items-center justify-center mx-auto flex-col">
      <AddImage />
      <Recentimage setProp={setProp} property={property}/>
    </div>
  );
};

export default Image;
