import React, { useEffect, useState } from "react";
import "../../../css/myfavorite.scss";
import { Badge, Box, Button, Checkbox, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Typography from "@mui/material/Typography";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import MemberApiServices from "../../apiServices/memberApiServices";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { verifyMemberData } from "../../apiServices/verify";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

const MyFavorites = () => {
  // ** INITIALIZATIONS ** //
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const memberService = new MemberApiServices();
    memberService
      .getLikedProducts()
      .then((data) => setLikedProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);
  // ** HANDLES ** //

  const targetLikeFavorite = async (e: any, id: string) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);
      const memberService = new MemberApiServices(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeTop", ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <div className="favorite_container">
      {likedProducts.length === 0 ? (
        <Typography className="no_favorites">No liked products yet!</Typography>
      ) : (
        likedProducts.map((product: Product) => {
          const images_path = `${serverApi}/${product.product_images[0]}`;
          const second_img_path = `${serverApi}/${product.product_images[1]}`;
          return (
            <div key={product._id} className="favorite_frame">
              <div className="img_frame">
                <img className="m_image" src={images_path} alt="" />
                {second_img_path && (
                  <img
                    className="m_image img_hover"
                    src={second_img_path}
                    alt=""
                  />
                )}
                <button
                  onClick={() => navigate(`/shop/${product._id}`)}
                  className="add_my_favorite_btn"
                >
                  add to cart
                </button>
                <div className="icon_box">
                  <Button className="eye_icon_box">
                    <Badge
                      color="primary"
                      badgeContent={product?.product_views || 0}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#380df6",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "40px",
                        },
                      }}
                    >
                      <Checkbox
                        size="medium"
                        icon={
                          <RemoveRedEyeIcon
                            className="eyeiCon"
                            style={{
                              fill: product.product_views ? "blue" : "black",
                              cursor: "pointer",
                            }}
                          />
                        }
                        checkedIcon={
                          <RemoveRedEyeIcon
                            style={{
                              fill: product.product_views ? "blue" : "black",
                              cursor: "pointer",
                            }}
                          />
                        }
                      />
                    </Badge>
                  </Button>
                  <Button className="favorite_icon_box">
                    <Badge
                      badgeContent={product?.product_likes || 0}
                      color="primary"
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#FF3040",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "40px",
                        },
                      }}
                    >
                      <Checkbox
                        className="check_badge"
                        onClick={(e) => targetLikeFavorite(e, product._id)}
                        size="medium"
                        icon={<FavoriteBorder style={{ color: "#fff" }} />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        checked={
                          product?.me_liked && product?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />
                    </Badge>
                  </Button>
                </div>
              </div>
              <Box className={"title_box"}>
                <div className="text_box">
                  <Typography className="jewellry_name">
                    {product.product_name}
                  </Typography>
                  <Typography className="jewellry_price">
                    ${product.product_price}
                  </Typography>
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
        })
      )}
    </div>
  );
};

export default MyFavorites;
