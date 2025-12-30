import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import "../../../css/login.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };



  return (
    <Box className="login_page">
      {/* Login Banner */}
      <Box className="login_hero">
        <Box className="hero_overlay" />
        <Container maxWidth="lg" className="hero_content">
          <Typography className="hero_title">Welcome to Glamora</Typography>
          <Typography className="hero_subtitle">
            Discover Timeless Elegance
          </Typography>
        </Container>
      </Box>

      {/* Login/Register Forms */}
      <Container maxWidth="lg" className="forms_container">
        <Box className="forms_wrapper">
          {/* Left Side - Image */}
          <Box className="form_image_section">
            <img
              src="/home/22.jpeg"
              alt="Glamora Jewelry"
              className="form_image"
            />
            <Box className="image_overlay">
              <Typography className="overlay_text">
                "Jewelry is like the perfect spice - it always complements
                what's already there."
              </Typography>
              <Typography className="overlay_author">
                - Diane von Furstenberg
              </Typography>
            </Box>
          </Box>

          {/* Right Side - Forms */}
          <Box className="form_section">
            {/* Tabs */}
            <Tabs
              value={activeTab} 
              onChange={handleTabChange}
              className="form_tabs"
              variant="fullWidth"
            >
              <Tab label="Login" className="tab_button" />
              <Tab label="Register" className="tab_button" />
            </Tabs>

            {/* Login Form */}
            {activeTab === 0 && (
              <Box
                component="form"
                className="form_content"
              >
                <Typography className="form_title">Welcome Back</Typography>
                <Typography className="form_subtitle">
                  Login to access your account
                </Typography>

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  className="form_input"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box className="form_options">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={loginData.remember}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            remember: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Remember me"
                    className="remember_checkbox"
                  />
                  <Typography
                    className="forgot_password"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </Typography>
                </Box>

                <Button type="submit" fullWidth className="submit_button">
                  Login
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    className="social_button google"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    className="social_button facebook"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    className="social_button apple"
                    startIcon={<AppleIcon />}
                  >
                    Apple
                  </Button>
                </Box>
              </Box>
            )}

            {/* Register Form */}
            {activeTab === 1 && (
              <Box
                component="form"
                className="form_content"
              >
                <Typography className="form_title">Create Account</Typography>
                <Typography className="form_subtitle">
                  Join Glamora family today
                </Typography>

                <TextField
                  fullWidth
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  className="form_input"
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  required
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  className="form_input"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  value={registerData.confirmPassword}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />

                <Button type="submit" fullWidth className="submit_button">
                  Create Account
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    className="social_button google"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    className="social_button facebook"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    className="social_button apple"
                    startIcon={<AppleIcon />}
                  >
                    Apple
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
