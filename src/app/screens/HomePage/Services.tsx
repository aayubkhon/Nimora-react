import { Box, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const story = [
    {
      id: "1",
      img: "/home/store1.jpeg",
      service: "Our Stores",
      title: "Your new favorite space to shop, stack, and stay a while.",
    },
    {
      id: "2",
      img: "/home/store3.jpeg",
      service: "Visit Our Stores",
      title: "Your new favorite space to shop, stack, and stay a while.",
    },
    {
      id: "3",
      img: "/home/store2.jpeg",
      service: "Our Stores",
      title: "Your new favorite space to shop, stack, and stay a while.",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="Services_frame">
      <Container>
        <Box marginLeft={3}>
          <h2 className="services-title">Stores & services</h2>
          <p className="services-subtitle">
            Discover our thoughtfully designed stores and Piercing Studios
            across North America, Australia and the UK.
          </p>
        </Box>
        <div className="store_wrapper">
          {story.map((store) => {
            return (
              <div key={store.id} className="store_frame">
                <img className="store_img" src={store.img} alt="" />
                <h3 className="store_title">{store.service}</h3>
                <p className="store_subtitle">{store.title}</p>
                <button
                  onClick={() => navigate("/store")}
                  className="store_click"
                >
                  Visit Our Stores
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
