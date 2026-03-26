import React from "react";
import { Box, Typography, IconButton, Checkbox, Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";
import "../../../css/products.scss";
// ** REDUX */
import { Product } from "../../types/product";
import { serverApi } from "../../lib/config";
const ProductCard = (props: any) => {
  const navigate = useNavigate();
  const choosenProductsHandler = (id: string) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="productCard_container">
      {props.allProducts.map((product: Product) => {
        const images_path = `${serverApi}/${product.product_images[0]}`;
        const second_img_path = `${serverApi}/${product.product_images[1]}`;
        return (
          <Box key={product._id} className="product_card">
            {/* Badges */}
            <Box className="badges">
              {product.createdAt &&
                new Date().getTime() - new Date(product.createdAt).getTime() <
                  7 * 24 * 60 * 60 * 1000 && (
                  <Box className="badge new_badge">NEW</Box>
                )}
            </Box>

            {/* Image Container */}
            <Box className="image_container">
              <Box
                className={"action_hover_box"}
                onClick={() => choosenProductsHandler(product._id)}
              >
                <img className="product_image" src={images_path} alt="" />
                {second_img_path && (
                  <img
                    className="product_image action_hover"
                    src={second_img_path}
                    alt=""
                  />
                )}
              </Box>

              {/* Hover Actions */}
              <Box className="hover_actions">
                <Badge
                  badgeContent={product?.product_views || 0}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#380df6",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "40px",
                    },
                  }}
                >
                  <IconButton
                    size="small"
                    className="action_btn quick_view_btn"
                  >
                    <RemoveRedEyeOutlinedIcon
                      style={{
                        fill: product.product_views ? "blue" : "black",
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                </Badge>
                <Badge
                  badgeContent={product?.product_likes || 0}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#FF3040",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Checkbox
                    className="action_btn favorite_btn"
                    onClick={(e) => props.targetLikeShop(e, product._id)}
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon style={{ color: "#FF3040" }} />}
                    checked={
                      product?.me_liked && product?.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                  />
                </Badge>
              </Box>
              {/* Add to Cart Button */}
              <button
                className={`add_to_cart_btn visible`}
                onClick={() => choosenProductsHandler(product._id)}
              >
                ADD TO CART
              </button>
            </Box>

            {/* Product Info */}
            <Box className="product_info">
              <Typography
                className="product_name"
                onClick={() => choosenProductsHandler(product._id)}
              >
                {product.product_name}
              </Typography>
              {/* Price */}
              <Box className="price_container">
                {product.product_discount > 0 ? (
                  <>
                    <Typography className="current_price">
                      ${product.product_discount.toFixed(2)}
                    </Typography>
                    <Typography className="original_price">
                      ${product.product_price.toFixed(2)}
                    </Typography>
                  </>
                ) : (
                  <Typography className="current_price">
                    ${product.product_price.toFixed(2)}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default ProductCard;
