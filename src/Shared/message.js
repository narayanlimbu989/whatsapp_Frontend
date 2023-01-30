import React from "react";

const Message = ({message}) => {
  return (
    <p className={message.receiver ? "chat_message": "chat_message receiver"}>
      <span className="sender">{message.name}</span>
      {message.message}
      <span className="timeStamp"> {message.timestamp}</span>
    </p>
  );
};

export default Message;
