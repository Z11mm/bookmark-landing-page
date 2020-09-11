import React from "react";

const Tabs = () => (
  <div>
    <div>
      <button className="tablinks">Simple Bookmarking</button>
      <button className="tablinks">Speedy Searching</button>
      <button className="tablinks">Easy Sharing</button>
    </div>

    <div id="London" class="tabcontent">
      <h3>Bookmark in one click</h3>
      <p>
        Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your favorite
        sites.
      </p>
    </div>
    <div id="London" class="tabcontent">
      <h3>Intelligent search</h3>
      <p>
        Our powerful search feature will help you find saved sites in no time at
        all. No need to trawl through all of your bookmarks.
      </p>
    </div>
    <div id="London" class="tabcontent">
      <h3>Share your bookmarks</h3>
      <p>
        Easily share your bookmarks and collections with others. Create a
        shareable link that you can send at the click of a button.
      </p>
    </div>
  </div>
);

export default Tabs;
