import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlasshOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import './SwipeButton.css';

function SwipeButton() {
	return (
    <div className="swipeButton">
      <IconButton className="swipeButton__repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButton__left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButton__right">
        <FavouriteIcon fontSize="large"></FavouriteIcon>
      </IconButton>
      <IconButton className="swipeButton__lightning">
        <FlasshOnIcon fontSize="large"></FlasshOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButton;
