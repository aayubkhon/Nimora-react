import { Button } from "@mui/material";
import React from "react";

const Advertisements = () => {
  return (
    <div className="Ads_shop_frame">
      <div className="ads_wrapper">
        <div className="ads_video">
          <iframe
            src="https://www.youtube.com/embed/7B7EROlV1M0?autoplay=1&mute=1&loop=1&playlist=7B7EROlV1M0"
            title="Chanel COCO CRUSH ad"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: "100%", height: "550px" }}
          />
        </div>
      </div>
      <div className="sale-banner">
        <div className="container">
          <div>
            <h2 className="title">SALE OF THE SEASON</h2>
            <p className="subtitle">
              Get Ready To Upgrade Your Eyewear Game And Save Big
            </p>
          </div>
          <div className="timer">
            <div className="timer_box">
              <p className="time">01</p>
              <p className="day">Days</p>
            </div>
            <div className="timer_box">
              <p className="time">10</p>
              <p className="day">Hours</p>
            </div>
            <div className="timer_box">
              <p className="time">29</p>
              <p className="day">Minutes</p>
            </div>
            <div className="timer_box">
              <p className="time">30</p>
              <p className="day">Seconds</p>
            </div>
          </div>
          <Button color="primary" className="view-offer">View Offer</Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
