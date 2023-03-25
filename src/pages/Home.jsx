import React from "react";
import SideBar from "../components/leftsidecomps/SideBar";
import ChatWindow from "../components/chatwindowcomps/ChatWindow";

const Home = () => {
  return (
    <div className="home container">
      <div className="container">
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;
