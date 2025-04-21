import React from "react";
import './Homepage.scss';
import BusinessSlider from "./BusinessSlider/BusinessSlider";
import Notification from "./Notification/Notification";

function PostedJobs() {

  return (
    <div className="homepage-section">
      <div className="flex-section">
        <div className="firstsection">
          <BusinessSlider />
        </div>
        <div className="secondsection">
          <Notification />
        </div>
        <div className="thirdsection">

        </div>
      </div>
    </div>
  );
}

export default PostedJobs;
