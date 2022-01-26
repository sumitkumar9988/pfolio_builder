import React, { useState } from "react";
import { Input } from "antd";
import skills from "./skills.json";
const { Search } = Input;

const filterPosts = (skills, query) => {
  if (!query) {
    return skills;
  }

  return skills.filter((skill) => {
    const skillList = skill.label;
    return skillList.includes(query);
  });
};

const SearchSkills = ({setProp}) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(skills, searchQuery);
  return (
    <div>
      <Search
        placeholder="input search text"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-2 pt-3">
          {filteredPosts &&
            filteredPosts.map((item) => (
              <div className="mt-4 mx-4">
                <img className="h-24 w-23" onClick={(e) => setProp((props) => (props.src = item.image))} src={item.image} alt={item.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSkills;
