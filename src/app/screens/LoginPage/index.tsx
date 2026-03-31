import React, { useEffect, useState } from "react";
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
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import MemberApiServices from "../../apiServices/memberApiServices";

const LoginPage = () => {
  // ** INITIALIZATIONS ** //
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [mb_nick, set_mb_nick] = useState<string>("");
  const [mb_phone, set_mb_phone] = useState<number>(0);
  const [mb_password, set_mb_password] = useState<string>("");
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  // ** HEANDLERS ** //
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleUsername = (e: any) => {
    set_mb_nick(e.target.value);
  };
  const handlePhone = (e: any) => {
    set_mb_phone(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
  };
  const passwordKeyDownHandler = (e: any, mode: "login" | "signup") => {
    if (e.key === "Enter") {
      if (mode === "signup") {
        handleSignUpRequest();
      } else {
        handleLoginRequest();
      }
    }
  };
  // ** SignUp Process ** //

  const handleSignUpRequest = async () => {
    try {
      const is_fulfiled =
        mb_nick !== "" && mb_password !== "" && mb_phone !== 0;
      assert.ok(is_fulfiled, Definer.input_err1);
      const signup_data = {
        mb_nick: mb_nick,
        mb_phone: mb_phone,
        mb_password: mb_password,
      };
      const memberApiService = new MemberApiServices();
      await memberApiService.signupRequest(signup_data);
      navigate("/");
      window.location.reload();
      sweetTopSmallSuccessAlert("SignUp Success", 1000, true);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  // ** Login Process ** //
  const handleLoginRequest = async () => {
    try {
      const is_fulfiled = mb_nick !== "" && mb_password !== "";
      assert.ok(is_fulfiled, Definer.input_err1);
      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };
      const memberApiService = new MemberApiServices();
      await memberApiService.loginRequest(login_data);
      navigate("/");
      window.location.reload();
      sweetTopSmallSuccessAlert("Login Success", 1000, true);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box className="login_page">
      {/* Login Banner */}
      <Box className="login_hero">
        <Box className="hero_overlay" />
        <Container maxWidth="lg" className="hero_content">
          <Typography className="hero_title">Welcome to Nimora</Typography>
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
              alt="Nimora Jewelry"
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
              <Box component="form" className="form_content">
                <Typography className="form_title">Welcome Back</Typography>
                <Typography className="form_subtitle">
                  Login to access your account
                </Typography>

                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  className="form_input"
                  onChange={handleUsername}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  onChange={handlePassword}
                  onKeyDown={(e) => passwordKeyDownHandler(e, "login")}
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
                    control={<Checkbox />}
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

                <Button
                  onClick={handleLoginRequest}
                  fullWidth
                  className="submit_button"
                >
                  Login
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button google"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button facebook"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
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
              <Box component="form" className="form_content">
                <Typography className="form_title">Create Account</Typography>
                <Typography className="form_subtitle">
                  Join Nimora family today
                </Typography>

                <TextField
                  fullWidth
                  label="Choose a Nickname"
                  type="text"
                  variant="outlined"
                  className="form_input"
                  onChange={handleUsername}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  type="text"
                  variant="outlined"
                  className="form_input"
                  onChange={handlePhone}
                />

                <TextField
                  fullWidth
                  label="Create Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="form_input"
                  onChange={handlePassword}
                  onKeyDown={(e) => passwordKeyDownHandler(e, "signup")}
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
                <Button
                  onClick={handleSignUpRequest}
                  fullWidth
                  className="submit_button"
                >
                  Create Account
                </Button>

                <Box className="divider">
                  <span>OR</span>
                </Box>

                <Box className="social_buttons">
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button google"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
                    className="social_button facebook"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                  <Button
                    onClick={() => navigate("*")}
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
