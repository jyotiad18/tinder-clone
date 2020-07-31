import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import { useParams } from 'react-router-dom';

function ChatScreen() {
	const { person } = useParams();
	const [input, SetInput] = useState();
	const [messages, setMessages] = useState([
    {
      name: person,
      image: "",
      message: "Whats up",
    },
    {
      name: person,
      image: "",
      message: "How are you?",
    },
    {
      message: "How are you?",
    },
  ]);

	const onHandleSubmit = (e) => {
		e.preventDefault();
		setMessages([
      ...messages,
      {        
        message: input
      },
    ]);
    SetInput("");
  };
	return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {`YOU MATCHED WITH ${person} ON 10/08/20`}
      </p>
      {messages?.map((message) =>
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
      <form
        className="chatScreen__input"        
      >
        <input
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message"
          value={input}
          onChange={(e) => {
            SetInput(e.target.value);
          }}
        />
        <button type="submit" className="chatScreen__inputButton" onClick={onHandleSubmit}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
