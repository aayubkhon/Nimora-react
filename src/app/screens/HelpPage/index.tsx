import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { ExpandMore } from "@mui/icons-material";
import "../../../css/help.scss";

export function HelpPage() {
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  const FAQ = [
    {
      question: "Do you accept international payment?",
      answer:
        "Yes, payments worldwide are accepted securely. Yes, payments worldwide are accepted securely. Yes, payments worldwide are accepted securely.",
    },
    {
      question: "How long does shipping take?",
      answer: "Usually 5–7 business days worldwide.",
    },
    {
      question: "What are the membership benefits?",
      answer:
        "Exclusive discounts, early access, special events. Exclusive discounts, early access, special events.",
    },
    {
      question: "What is your privacy policy?",
      answer:
        "We protect your data according to law. We protect your data according to law.",
    },
    {
      question: "How do i contact customer service?",
      answer:
        "Email, phone, or live chat available 24/7. Email, phone, or live chat available 24/7.",
    },
  ];

  const notice = [
    {
      question: "Community Event",
      answer:
        "Join our Virtual Jewelry Showcase on September 10 via live stream.",
    },
    {
      question: "Policy Update",
      answer:
        "Our Return & Exchange policy has been updated, effective September 1",
    },
    {
      question: "Maintenance Alert",
      answer:
        "The website will be down for scheduled maintenance on September 25, 2–4 AM (UTC).",
    },
    {
      question: "New Collection Launch",
      answer: "Our “Celeste Gems” line is now available in-store and online.",
    },
    {
      question: "Holiday Shipping Reminder",
      answer:
        "Orders placed after December 15 may arrive after Christmas due to high demand.",
    },
  ];

  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="help_page">
      <Box className="bg_help">
        <div className="help_box">
          <h1 className="help">CS</h1>
          <p className="help_title">Home/Costumer-Services</p>
        </div>
      </Box>
      <Box className={"cs_title"}>
        <div className="bg_patern">
          <h1 className="support">Glamora Support</h1>
          <p className="title">
            Your inquiries deserve nothing less than excellence
          </p>
        </div>
        <TabContext value={value}>
        <Box className={"help_menu"} >
            <Tabs  value={value}  onChange={handleChange} sx={{"& button.Mui-selected":{backgroundColor:"white",color:"black"}}}>
              <Tab
                className="help_tab"
                label="Notice"
                value={"1"}
              />
              <Tab
                className="help_tab"
                label="FAQ"
                value={"2"}
              />
              <Tab
                className="help_tab"
                label="Contact Us"
                value={"3"}
              />
            </Tabs>
          </Box>
          <Container>
            <Box>
              <h1 className="faq">Frequently Asked Questions</h1>
            </Box>
            <Stack className="help_main_content">
              <TabPanel value={"1"}>
                <Stack className="theRules_box">
                  <Box className="theRules_frame">
                    {notice.map((ele, number) => {
                      return (
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panella-content"
                            id="panella-header"
                          >
                            <Typography className="ques_question">
                              {ele.question}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="ques_answer">
                              {ele.answer}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Stack className="accordian_menu">
                  {FAQ.map((ele) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panella-content"
                          id="panella-header"
                        >
                          <Typography className="ques_text">
                            {ele.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <div className="wrapper">
                  <Stack className="message_container">
                    <h2 className="pragraph">We're Always Here To Assist</h2>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="Your name"
                    />
                    <input
                      className="input_style"
                      type="email"
                      placeholder="Your email"
                    />
                    <input
                      className="input_style"
                      type="text"
                      placeholder="Your subject"
                    />
                    <textarea
                      className="input_style"
                      placeholder="Your message"
                    />
                    <Box className="btn_wrap">
                      <Button
                        variant="contained"
                        color="primary"
                        className={"send_btnn"}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Stack>
                  <div className="bg_cont">
                    <div className="bg_img"></div>
                  </div>
                </div>
              </TabPanel>
            </Stack>
          </Container>
        </TabContext>
      </Box>
    </div>
  );
}
