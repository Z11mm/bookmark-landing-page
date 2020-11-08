import React, { useState } from "react";

import { Tab } from "./Tab";

// import bookmarktab from "../assets/images/illustration-features-tab-1.svg";
// import searchtab from "../assets/images/illustration-features-tab-2.svg";
// import sharetab from "../assets/images/illustration-features-tab-3.svg";

const TabGroup = (props) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(props.children[0].props.id);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ul>

      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
    // <div>
    //   <div className="tab">
    //     <button className="tablinks">Simple Bookmarking</button>
    //     <button className="tablinks">Speedy Searching</button>
    //     <button className="tablinks">Easy Sharing</button>
    //   </div>

      // <div id="bookmark" className="tabcontent">
      //   <div className="tab-thumbnail">
      //     <img src={bookmarktab} alt="bookmark thumbnail" />
      //   </div>
      //   <div className="tabcontent-text">
      //     <h3>Bookmark in one click</h3>
      //     <p>
      //       Organize your bookmarks however you like. Our simple drag-and-drop
      //       interface gives you complete control over how you manage your
      //       favorite sites.
      //     </p>
      //     <button className="tabcontent-btn">More Info</button>
      //   </div>
      // </div>
      // <div id="intellisearch" className="tabcontent">
      //   <div className="tab-thumbnail">
      //     <img src={searchtab} alt="search thumbnail" />
      //   </div>
      //   <div className="tabcontent-text">
      //     <h3>Intelligent search</h3>
      //     <p>
      //       Our powerful search feature will help you find saved sites in no
      //       time at all. No need to trawl through all of your bookmarks.
      //     </p>
      //     <button className="tabcontent-btn">More Info</button>
      //   </div>
      // </div>
      // <div id="sharebookmark" className="tabcontent">
      //   <div className="tab-thumbnail">
      //     <img src={sharetab} alt="share thumbnail" />
      //   </div>
      //   <div className="tabcontent-text">
      //     <h3>Share your bookmarks</h3>
      //     <p>
      //       Easily share your bookmarks and collections with others. Create a
      //       shareable link that you can send at the click of a button.
      //     </p>
      //     <button className="tabcontent-btn">More Info</button>
      //   </div>
      // </div>
    // </div>
  );
};

export default TabGroup;
