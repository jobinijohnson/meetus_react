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
import Achievements from "./Achievements/Achievements";
import Members from "./Members/Members";
import Poll from "./Poll/Poll";
import Events from "./Events/Events";
import Jobs from "./Jobs/Jobs";

function PostedJobs() {

  return (
    <div className="homepage-section">
      <div className="flex-section">
        <div className="firstsection">
          <BusinessSlider />
          <Birthday />
          <News />
          <Jobs />
        </div>
        <div className="secondsection">
          <Notification />
          <UsefulTools />
          <CalenderSection />
          <Achievements />
          <Poll />
        </div>
        <div className="thirdsection">
          <Bookmarks />
          <Awards />
          <Members />
          <Events />
        </div>
      </div>
    </div>
  );
}

export default PostedJobs;
