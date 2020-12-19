import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [message, setMessages] = useState([
    {
      name: "Mila",
      image:
        "https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.12442-15/e35/c37.204.690.690a/s150x150/52964926_2277768715876534_8971317253836288144_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QPwSVt2-UkYAX9e3eTs&tp=1&oh=40fb93b35e200d4ed6404eb93a3a7d8e&oe=5FBF2441",
      message: "whats up 🧡",
    },
    {
      name: "Mila",
      image:
        "https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.12442-15/e35/c37.204.690.690a/s150x150/52964926_2277768715876534_8971317253836288144_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QPwSVt2-UkYAX9e3eTs&tp=1&oh=40fb93b35e200d4ed6404eb93a3a7d8e&oe=5FBF2441",
      message: "How are you doing",
    },
    {
      message: "Hey Mila! Whats up 🧡",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...message, {message: input}]);
    setInput('');
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MILA ON 24/11/2020
      </p>
      {message.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
      </form>
    </div>
  );
}

export default ChatScreen;
