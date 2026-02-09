import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack, Avatar } from "@mui/material";
import "../../../css/my_page.scss";
import { verifyMemberData } from "../../apiServices/verify";
import { MemberUpdateData } from "../../types/user";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";

const MySettings = () => {
  // ** INITIALIZATIONS ** //
  const [file, setFile] = useState(verifyMemberData?.mb_image);
  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_address: "",
    mb_description: "",
    mb_image: "",
  });
  // ** HANDLERS **//
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAdressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handleImagePreviewer = (e: any) => {
    try {
      console.log("sadsa", e.target.files);
      const file = e.target.files[0];
      const filetype = file["type"],
        validTypes = ["image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(filetype) && file, Definer.input_err2);
      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (err) {
      console.log(`ERROR ::: handleImagePreviewer", ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const handleSubmitButton = async () => {
    try {
      const memberService = new MemberApiServices();
      const result = await memberService.updateMemberData(memberUpdate);
      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfully",
        700,
        false,
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR ::: handleSubmitButton", ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <div>
      <Stack className="setting_container" flexDirection={"column"}>
        <Box className="setting_file_box">
          <Avatar
            alt={""}
            className="setting_avatar_img"
            sx={{ width: "80px", height: "80px" }}
            src={file}
          />
          <div className="media_change_box">
            <span className="file_info">Upload Profile Image </span>
            <p className="file_type">
              A photo must be in JPG, JPEG or PNG format!
            </p>
            <div>
              <Button component="label" onChange={handleImagePreviewer}>
                <CloudDownloadIcon color="secondary" />
                <input type="file" hidden />
              </Button>
            </div>
          </div>
        </Box>
        <Box className="input_frame">
          <p className="input_text">User Name</p>
          <div className="info_input">
            <input
              className="spec_label_input mb_nick"
              type="text"
              placeholder={verifyMemberData?.mb_nick}
              name="mb_nick"
              onChange={changeMemberNickHandler}
            />
          </div>
        </Box>
        <Box className="short_input_frame">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="input_text">Phone Number</p>
            <div className="short_input">
              <input
                className="spec_short_input mb_phone"
                type="text"
                placeholder={verifyMemberData?.mb_phone}
                name="mb_phone"
                onChange={changeMemberPhoneHandler}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ marginLeft: "30px" }} className="input_text">
              Address
            </p>
            <div className="short_input_second">
              <input
                className="spec_short_input mb_address"
                type="text"
                placeholder={verifyMemberData?.mb_adress ?? "No Adress"}
                name="mb_address"
                onChange={changeMemberAdressHandler}
              />
            </div>
          </div>
        </Box>
        <Box className="input_frame">
          <p className="input_text">Info</p>
          <div className="big_info_input">
            <textarea
              className="spec_big_input mb_description"
              placeholder={verifyMemberData?.mb_description ?? "No Description"}
              name="mb_description"
              onChange={changeMemberDescriptionHandler}
            />
          </div>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            onClick={handleSubmitButton}
            variant="contained"
            className="update_btn_box"
          >
            Update Profile
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default MySettings;
