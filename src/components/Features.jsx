import React, { useState } from "react";
import Tabs from "./Tabs";

const Features = () => {
  const [activeTab, setActiveTab] = useState(false);

  const toggleActiveTab = () => {
    if (activeTab === false) {
      setActiveTab(true);
      // console.log(activeTab);
    } else {
      setActiveTab(false);
    }
  };
  // console.log(activeTab);

  return (
    <div>
      <div className="features">
        <h2>Features</h2>
        <p className="features-intro">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="tab">
        <button className="tablinks">Simple Bookmarking</button>
        <button className="tablinks">Speedy Searching</button>
        <button className="tablinks">Easy Sharing</button>
      </div>

      <Tabs handleToggleTab={toggleActiveTab} />
    </div>
  );
};

export default Features;
