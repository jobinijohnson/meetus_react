import React from "react";
import './Homepage.scss';
import BusinessSlider from "./BusinessSlider/BusinessSlider";
import Notification from "./Notification/Notification";
import Bookmarks from "./Bookmarks/Bookmarks";
import UsefulTools from "./UsefulTools/UsefulTools";
import Birthday from "./Birthday/Birthday";
import CalenderSection from "./Calender/Calender";
import Awards from "./Awards/Awards";
import News from "./News/News";

function PostedJobs() {

  return (
    <div className="homepage-section">
      <div className="flex-section">
        <div className="firstsection">
          <BusinessSlider />
          <Birthday />
          <News />
        </div>
        <div className="secondsection">
          <Notification />
          <UsefulTools />
          <CalenderSection />
        </div>
        <div className="thirdsection">
          <Bookmarks />
          <Awards />
        </div>
      </div>
    </div>
  );
}

export default PostedJobs;
