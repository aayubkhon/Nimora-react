import React from "react";
import "../../../css/myfavorite.scss";
import Link from "@mui/joy/Link";
import { Badge, Box, Button, Checkbox, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Typography from "@mui/material/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

const MyFavorites = () => {
  return (
    <div className="favorite_frame">
      <div className="img_frame">
        <img className="m_image" src="/home/bridal.jpeg" alt="" />
        <img className="img_hover" src="/home/chain.jpeg" alt="" />
        <button className="add_to_cart">add to cart</button>
        <div className="icon_box">
          <Button className="box_icon">
            <Badge className="eyeiCon_box" badgeContent={8} color="secondary">
              <Checkbox
                size="large"
                icon={<RemoveRedEyeIcon className="eyeiCon" />}
                checkedIcon={<RemoveRedEyeIcon style={{ color: "blue" }} />}
              />
            </Badge>
          </Button>
          <Box className="box_icon">
            <Badge
              className="favorite_badge"
              color="secondary"
              badgeContent={8}
            >
              <Checkbox
                size="large"
                icon={<FavoriteBorder style={{ color: "#000" }} />}
                checkedIcon={<Favorite style={{ color: "red" }} />}
              />
            </Badge>
          </Box>
        </div>
      </div>
      <Box className={"title_box"}>
        <div className="text_box">
          <Typography className="jewellry_name">
            Elegant Gold Necklace
          </Typography>
          <Typography className="jewellry_price">$2,900</Typography>
          <Rating
            sx={{ mt: 2 }}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
        </div>
      </Box>
    </div>
  );
};

export default MyFavorites;
