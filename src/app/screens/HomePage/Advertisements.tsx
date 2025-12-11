import { Button } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const Advertisements = () => {
  const navigate = useNavigate()
  return (
    <div className="Ads_shop_frame">
      <div className="ads_wrapper">
        <div className="ads_video">
         <video width="100%"  autoPlay muted loop src="./video/shanel.mp4"></video>
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
          <Button onClick={() => navigate("/shop")}color="primary" className="view-offer">View Offer</Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
