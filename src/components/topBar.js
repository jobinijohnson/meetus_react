import React from 'react';
import "./topBar.scss";
import MenuIcon from "../assets/menu.svg";
import Notify from "../assets/notify.svg";
import Profile from "../assets/profile.svg";

function TopBar({ ToggleBtn }) {
  return (
    <div className="topbardesktop-section">
      <div style={{ boxShadow: '0 5px 17px rgba(0,0,0,0.07)' }} className="topBar relative zIndex-1 dark:bg-[#051534]">
        <div className="mx-auto w-full px-4 sm:px-6 dark:bg-[#051534]">
          <div className="relative flex justify-between items-center h-16">
            <div className="flex items-center">
              <space className="logo-content">MeetUs</space><img className="menuicon" src={MenuIcon} onClick={ToggleBtn} alt="menu-icon" /> 
            </div>
            <div className="flex items-center">
              <img className="notifyicon" src={Notify} alt="notify" />
              <img className="profileicon" src={Profile} alt="profile" />
              <div>
                {/* <div className="username-content">Rajesh Malhotra</div> */}
                {/* <div className='userrole-content'>Admin</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
