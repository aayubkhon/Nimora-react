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
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ExpandMore } from "@mui/icons-material";
import "../../../css/help.scss";

export function HelpPage(props: any) {
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  const FAQ = [
    {
      question: "To'lov qanday amalga oshiriladi?",
      answer:
        "To'lovni PayMe Click ilovalari orqali amalga oshirishingiz mumkin.",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi?",
      answer: "Buyurtma harid qilgan maxsulotingiz turiga qarab farqlanadi.",
    },
    {
      question:
        "Saytdan foydalansam ma'lumotlarim havfsizligi kafolatlanganmi?",
      answer:
        "Albatta bizning dasturchilarimiz siznimg ma'lumotlaringiz xavfsizligiga kafolat beradi.",
    },
    {
      question:
        "Saytdan foydalanishda muammo yuzaga kelsa kimga murojaat qilish kerak?",
      answer: "Agar saytda muammo yuzaga kelsa adminga mutojaat qiling.",
    },
    {
      question:
        "Saytdan foydalansam ma'lumotlarim havfsizligi kafolatlanganmi?",
      answer:
        "Albatta bizning dasturchilarimiz siznimg ma'lumotlaringiz xavfsizligiga kafolat beradi.",
    },
    {
      question: "To'lov qanday amalga oshiriladi?",
      answer:
        "To'lovni PayMe Click ilovalari orqali amalga oshirishingiz mumkin.",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi?",
      answer: "Buyurtma harid qilgan maxsulotingiz turiga qarab farqlanadi.",
    },
    {
      question:
        "Saytdan foydalansam ma'lumotlarim havfsizligi kafolatlanganmi?",
      answer:
        "Albatta bizning dasturchilarimiz siznimg ma'lumotlaringiz xavfsizligiga kafolat beradi.",
    },
  ];

  const rules = [
    "Saytdan to'laqonli yani buyurtmalar qilish, jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz shart",
    "Buyurtmalar to'lovini amalga oshirgandan so'ng to'lovni qaytarib ololmaysiz. Shu sababli oldindan tekshirib oling",
    "Jonli muloqot vaqtida turli behayo, inson shaniga to'g'ri kelmaydigan gaplarni yozmang.",
    "Shaxsiy reklamalarni admin ruxsatisiz yozish mumkin emas.",
    "Maqolalar odob doirasidan chiqib ketmasligi shart",
    "Barcha harakatlaringiz admin tomonidan tekshiriladi.",
  ];

  // ** HANDLERS **//
  const handleChange = (event: any, newValue: string) => {
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
          <TabList className="help_tablist">
           <Box className="help_menu">
               <Box >
              <Tab className="help_tab" label="Notice" value={"1"} />
              <Tab className="help_tab" label="FAQ" value={"2"} />
              <Tab className="help_tab" label="Contact Us" value={"3"} />
            </Box>
sasa
           </Box>
          </TabList>
        </TabContext>
      </Box>
    </div>
  );
}
