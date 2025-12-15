import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "../../../css/footer.scss";

const Footer = () => {
  return (
    <Box className="footer_container">
      {/* Top Section - Contact Info */}
      <Box className="footer_top">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="info_card">
                <QuestionAnswerIcon className="info_icon" />
                <Box>
                  <Typography className="info_title">Having Quires?</Typography>
                  <Typography className="info_text">
                    Nullam pulvinar egestas tortor, venenatis dolor rutrum eget.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="info_card">
                <LocationOnIcon className="info_icon" />
                <Box>
                  <Typography className="info_title">Locate Us</Typography>
                  <Typography className="info_text">
                    Etiam placerat egestas lorem vitae venenatis dolar rutrum.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="info_card">
                <PhoneIcon className="info_icon" />
                <Box>
                  <Typography className="info_title">Call Us Today</Typography>
                  <Typography className="info_text">
                    Nullam placerat egestas lorem vitae venenatis dolar rutrum.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="info_card">
                <EmailIcon className="info_icon" />
                <Box>
                  <Typography className="info_title">
                    Get In To Inbox
                  </Typography>
                  <Typography className="info_text">
                    Etiam placerat egestas lorem vitae venenatis dolar rutrum
                    ges.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Box className="footer_main">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box className="brand_section">
                <img src="./icons/glamora.svg" alt="" />
                <Typography className="brand_description">
                  Duis ornare ipsum vel mollis tempor. Vivamus a elit nunc.
                  Aliquam eu scelerisque.
                </Typography>
                <Box className="social_icons">
                  <IconButton className="social_btn">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton className="social_btn">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton className="social_btn">
                    <XIcon />
                  </IconButton>
                  <IconButton className="social_btn">
                    <YouTubeIcon />
                  </IconButton>
                  <IconButton className="social_btn">
                    <PinterestIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Categories */}
            <Grid item xs={6} sm={3} md={2}>
              <Box className="footer_column">
                <Typography className="column_title">Categories</Typography>
                <Link to="/shop" className="footer_link">
                  Intrigue Revival
                </Link>
                <Link to="/shop" className="footer_link">
                  Endgangering Revival
                </Link>
                <Link to="/shop" className="footer_link">
                  Bangles
                </Link>
                <Link to="/shop" className="footer_link">
                  Accessories
                </Link>
                <Link to="/shop" className="footer_link">
                  Shop All
                </Link>
              </Box>
            </Grid>

            {/* Resources */}
            <Grid item xs={6} sm={3} md={2}>
              <Box className="footer_column">
                <Typography className="column_title">Resources</Typography>
                <Link to="/help" className="footer_link">
                  FAQ
                </Link>
                <Typography  className="footer_link">
                  Style Guide
                </Typography>
                <Link to="/community" className="footer_link">
                  Community
                </Link>
                <Typography className="footer_link">
                  Make-A-Friend
                </Typography>
                <Typography  className="footer_link">
                  Statement
                </Typography>
              </Box>
            </Grid>

            {/* Useful Links */}
            <Grid item xs={6} sm={3} md={2}>
              <Box className="footer_column">
                <Typography className="column_title">Useful Links</Typography>
                <Typography className="footer_link">
                  Browse Revival
                </Typography>
                <Typography  className="footer_link">
                  Endgangering Revival
                </Typography>
                <Typography  className="footer_link">
                  Bangles
                </Typography>
                <Typography className="footer_link">
                  Accessories
                </Typography>
                <Link to="/shop" className="footer_link">
                  Shop All
                </Link>
              </Box>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={2}>
              <Box className="footer_column">
                <Typography className="column_title">
                  Subscribe Our Newsletter
                </Typography>
                <Typography className="newsletter_text">
                  Integer ligertis, Reediting A Stranger Nation Through
                  relegation.
                </Typography>
                <Box className="newsletter_form">
                  <TextField
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    className="newsletter_input"
                    size="small"
                  />
                  <Button className="subscribe_btn">→</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Footer */}
      <Box className="footer_bottom">
        <Container maxWidth="xl">
          <Box className="footer_bottom_content">
            <Typography className="copyright">
              © Akramov Ayubkhon All Rights Reserved
            </Typography>
            <Box className="payment_methods">
              <img src="/icons/Layer.svg" alt="COD" className="payment_icon" />
              <img src="/icons/pay.svg" alt="GPay" className="payment_icon" />
              <img
                src="/icons/Layer3.svg"
                alt="Paytm"
                className="payment_icon"
              />
              <img src="/icons/kisa.svg" alt="BHIM" className="payment_icon" />
              <img
                src="/icons/bank.svg"
                alt="PhonePe"
                className="payment_icon"
              />
              <img
                src="/icons/grow.svg"
                alt="Credit Card"
                className="payment_icon"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
