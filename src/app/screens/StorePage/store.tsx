import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../css/store.scss";

const Store = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const stories = [
    {
      id: 1,
      date: "FEB 02 2023",
      title: "The Key To Unmatched Sophistication",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
    {
      id: 2,
      date: "FEB 02 2023",
      title: "Embrace The Unseen Magic Uniqueness",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
    {
      id: 3,
      date: "FEB 02 2023",
      title: "Redefining Elegance Unique Charms",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
     {
      id: 4,
      date: "FEB 02 2023",
      title: "The Key To Unmatched Sophistication",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
    {
      id: 5,
      date: "FEB 02 2023",
      title: "Embrace The Unseen Magic Uniqueness",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
    {
      id: 6,
      date: "FEB 02 2023",
      title: "Redefining Elegance Unique Charms",
      description:
        "There Are Many Variations Of Passages Lorem Ipsum Available, But The Majority Have Suffered.",
      image: "/home/new_r.jpeg",
    },
  ];

  return (
    <Box className="featured_stories_section">
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box className="section_header">
          <Box className="header_left">
            <Typography className="section_subtitle">POPULAR POST</Typography>
            <Typography className="section_title">
              Featured Stories About
              <br />
              Jewellery
            </Typography>
          </Box>
          <Box className="header_right">
            <Typography className="header_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
            <Button
              className="view_all_btn"
              onClick={() => navigate("/stories")}
            >
              VIEW ALL
            </Button>
          </Box>
        </Box>

        {/* Stories Grid */}
        <Grid container spacing={3} className="stories_grid">
          {stories.map((story) => (
            <Grid item xs={12} md={4} key={story.id}>
              <Box className="story_card">
                {/* Image Section */}
                <Box
                  className="story_image"
                  sx={{ backgroundImage: `url(${story.image})` }}
                  onClick={() => navigate(`/story/${story.id}`)}
                >
                  <Box className="read_more_overlay">
                    <Typography className="read_more_text">
                      ← Read More →
                    </Typography>
                  </Box>
                </Box>

                {/* Content Section */}
                <Box className="story_content">
                  <Typography className="story_date">{story.date}</Typography>
                  <Typography className="story_title">{story.title}</Typography>
                  <Typography className="story_description">
                    {story.description}
                  </Typography>
                  <Button
                    className="story_btn"
                    onClick={() => navigate(`/story/${story.id}`)}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box className="pagination_container">
          <Box className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index + 1}
                className={`page_btn ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              className="next_btn"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Store;
