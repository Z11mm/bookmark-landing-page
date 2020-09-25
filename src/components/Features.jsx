import React from "react";
import Tabs from "./Tabs";

const Features = () => (
  <div>
    <div className='features'>
      <h2>Features</h2>
      <p className='features-intro'>
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>

    <Tabs />
  </div>
);

export default Features;
