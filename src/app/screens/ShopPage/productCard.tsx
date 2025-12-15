import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Rating } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import "../../../css/products.scss";
import productCards from "../../lib/product";
const ProductCard = () => {
   const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic
    console.log("Added to cart:", );
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Quick view logic
    console.log("Quick view:", );
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
   {productCards.map(({ id, name, price, discount, image, hoverImage, isNew, rating }) => {
    const discountedPrice = discount > 0 ? price - (price * discount / 100) : price;
    return (
          <Box 
      className="product_card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Badges */}
      <Box className="badges">
        {isNew && (
          <Box className="badge new_badge">NEW</Box>
        )}
        {discount > 0 && (
          <Box className="badge discount_badge">-{discount}%</Box>
        )}
      </Box>

      {/* Image Container */}
      <Box className="image_container">
        <img 
          src={isHovered && hoverImage ? hoverImage : image} 
          alt={name}
          className="product_image"
        />
        
        {/* Hover Actions */}
        <Box className={`hover_actions ${isHovered ? 'visible' : ''}`}>
          <IconButton 
            className="action_btn quick_view_btn"
            onClick={handleQuickView}
          >
            <RemoveRedEyeOutlinedIcon />
          </IconButton>
          <IconButton 
            className={`action_btn favorite_btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        {/* Add to Cart Button */}
        <button 
          className={`add_to_cart_btn ${isHovered ? 'visible' : ''}`}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </Box>

      {/* Product Info */}
      <Box className="product_info">
        <Typography className="product_name" title={name}>
          {name}
        </Typography>
        
        {/* Rating */}
        {rating > 0 && (
          <Box className="rating_container">
            <Rating 
              value={rating} 
              precision={0.5} 
              size="small" 
              readOnly
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#FFB800'
                }
              }}
            />
          </Box>
        )}

        {/* Price */}
        <Box className="price_container">
          {discount > 0 ? (
            <>
              <Typography className="current_price">
                ${discountedPrice.toFixed(2)}
              </Typography>
              <Typography className="original_price">
                ${price.toFixed(2)}
              </Typography>
            </>
          ) : (
            <Typography className="current_price">
              ${price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
    );
   })}
    </div>
  )
}

export default ProductCard