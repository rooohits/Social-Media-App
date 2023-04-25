import React from "react";
import "./TopBar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialChat</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          ></input>
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink"><Link to="/" className="topbarLinkTag"><b>Homepage</b></Link></span>
          
          <span className="topbarLink">
            <b>Timeline</b>
          </span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link to="/login" className="topbarIconItemLinkTag">
              <PersonIcon />
            </Link>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={"/profile"}>
          <img src="/assets/person/pp.jpg" alt="" className="topbarImg" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
