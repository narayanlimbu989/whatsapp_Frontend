import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Sidebarchat from "../Shared/Sidebar_chat";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_head">
        <div className="Shead_left">
          <Avatar />
        </div>
        <div className="Shead_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="search_container">
          <PersonSearchIcon className="search_icon" />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <h2 className="Add">Add new chat</h2>
      <div className="Allchat_persons">
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  );
};

export default Sidebar;
