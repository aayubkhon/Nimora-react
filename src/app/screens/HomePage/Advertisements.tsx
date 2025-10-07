import { Button } from "@mui/material";
import moment from "moment";
import React from "react";

const Advertisements = () => {
  return (
    <div className="Ads_shop_frame">
      <div className="ads_wrapper">
        <div className="ads_video">
          <iframe
            src="https://www.youtube.com/embed/7B7EROlV1M0?autoplay=1&mute=1&loop=1&playlist=7B7EROlV1M0"
            title="Chanel COCO CRUSH ad"
            allow="autoplay; fullscreen"
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
                 <span className="time">{moment().format("YY-MM-DD HH:MM")}</span>
          </div>
          <Button color="primary" className="view-offer">View Offer</Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
