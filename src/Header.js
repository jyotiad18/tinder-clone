import React from 'react'
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import './Header.css';
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

	return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          src="https://cdn.1min30.com/wp-content/uploads/2018/05/logo-Tinder-1.jpg"
          className="header__logo"
          alt="tinder logo"
        ></img>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ChatBubbleIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
