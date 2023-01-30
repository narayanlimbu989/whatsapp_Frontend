import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Message from "../Shared/message";
import MoodIcon from "@mui/icons-material/Mood";
import MicIcon from "@mui/icons-material/Mic";
import { instance } from "../Http";
const Chat = ({ message }) => {
  const [data, setdata] = useState("");
  const sendmessage = async(e) => {
    e.preventDefault();
   await instance.post("/message", {
      message: data,
      name: "me",
      timestamp: new Date(),
      receiver: false,
    });
    setdata("");
  };
  return (
    <div className="chat_container">
      <div className="chat_head">
        <Avatar />
        <div className="chat_headinfo">
          <div className="roomName">Demo Room</div>
          <div className="message">Last seen at ...</div>
        </div>
        <div className="chat_headRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {message.map((message) => {
          return <Message message={message} />;
        })}
      </div>
      <div className="chat_footer">
        <IconButton>
          <MoodIcon />
        </IconButton>
        <form>
          <input
            value={data}
            type="text"
            onChange={(e) => setdata(e.target.value)}
            placeholder="Type a message"
          />
          <button
            onClick={sendmessage}
            type="submit"
            style={{ display: "none" }}
          >
            send
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
