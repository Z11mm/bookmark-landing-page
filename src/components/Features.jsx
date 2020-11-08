import React from "react";
import TabGroup from "./TabGroup";

import bookmarktab from "../assets/images/illustration-features-tab-1.svg";
import searchtab from "../assets/images/illustration-features-tab-2.svg";
import sharetab from "../assets/images/illustration-features-tab-3.svg";

const Features = () => {
  // const [activeTab, setActiveTab] = useState(false);

  // const toggleActiveTab = () => {
  //   if (activeTab === false) {
  //     setActiveTab(true);
  //   } else {
  //     setActiveTab(false);
  //   }
  // };

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

      <TabGroup>
        <div label="Simple Bookmarking" className="tabcontent" aria-label="Simple Bookmarking">
          <div className="tab-thumbnail">
            <img src={bookmarktab} alt="bookmark thumbnail" />
          </div>
          <div className="tabcontent-text">
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <button className="tabcontent-btn">More Info</button>
          </div>
        </div>
        <div label="Speedy Searching" className="tabcontent" aria-label="Speedy Searching">
          <div className="tab-thumbnail">
            <img src={searchtab} alt="search thumbnail" />
          </div>
          <div className="tabcontent-text">
            <h3>Intelligent search</h3>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="tabcontent-btn">More Info</button>
          </div>
        </div>
        <div label="Easy Sharing" className="tabcontent" aria-label="Easy Sharing">
          <div className="tab-thumbnail">
            <img src={sharetab} alt="share thumbnail" />
          </div>
          <div className="tabcontent-text">
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="tabcontent-btn">More Info</button>
          </div>
        </div>
      </TabGroup>
    </div>
  );
};

export default Features;
