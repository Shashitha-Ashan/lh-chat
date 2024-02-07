/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ChatRooms from "./components/ChatRooms/ChatRooms";
import ChatsArea from "./components/ChatsArea/ChatsArea";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <main>
        <ChatRooms />
        <hr />
        <ChatsArea />
      </main>
    </div>
  );
}

export default App;
