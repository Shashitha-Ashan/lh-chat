/* eslint-disable no-unused-vars */
import React from "react";
import "./chat-bubble.css";
import { CiMenuKebab } from "react-icons/ci";

function ChatBubble() {
  return (
    <div className="chat-bubble-container">
      <div className="chat-bubble-about">
        <p className="person-name">Ashan</p>
        <button
          className="chat-bubble-menu"
          onClick={() => {
            console.log("Hi i am button");
          }}
        >
          <CiMenuKebab color="black" />
        </button>
      </div>
      <p className="chat-bubble-message">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium
        illum ex fugiat architecto, dolorem nulla animi doloribus quibusdam
        vitae tempora nobis error? Quis asperiores, obcaecati incidunt assumenda
        fuga ad!
      </p>
    </div>
  );
}

export default ChatBubble;
