import React, { useContext } from "react";
import Cam from "../../img/cam.png";
import Add from "../../img/add.png";
import More from "../../img/more.png";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { ChatContext } from "../../context/ChatContext";

const ChatWindow = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="Camera icon" />
          <img src={Add} alt="Add friend icon" />
          <img src={More} alt="More icon" />
        </div>
      </div>
      <Messages />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
