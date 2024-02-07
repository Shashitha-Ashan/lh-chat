/* eslint-disable no-unused-vars */
import React from "react";
import "./chat-area.css";
import ChatBubble from "../ChatBubble/ChatBubble";

function ChatsArea() {
  return (
    <section className="chatroom">
      <div className="chat-nav">
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
      </div>
      <div className="chats-area">
        <ChatBubble />
      </div>
      <div className="type-area">
        <form>
          <input
            type="text"
            placeholder="type here..."
            className="type-area-text-field"
          />
          <input type="submit" value="send" />
        </form>
      </div>
    </section>
  );
}

export default ChatsArea;
