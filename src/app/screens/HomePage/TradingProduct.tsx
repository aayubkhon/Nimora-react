import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../lib/swiper";
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Button, Link } from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

const TrabdingProduct = () => {
  return (
    <CssVarsProvider>
      <div className="TrandingProduct_frame">
        <Box flexDirection={"column"}>
          <Typography className="frame_name">
            {" "}
            TOP 5 TRENDING PRODUCTS
          </Typography>
        </Box>
        <Swiper
          slidesPerView={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card_frame">
                <Box className={"img_car_box"}>
                  <Box className="img_frame">
                    <img className="m_image" src={product.image} alt="" />
                    <img
                      className=".m_image img_hover"
                      src={product.image_hover}
                      alt=""
                    />
                    <Button className="add">add +</Button>
                    <div className="icon_box"></div>
                  </Box>
                  <Box>
                    <Box>
                      <Typography className="product_name">
                        {product.name}
                      </Typography>
                      <Box display={"flex"}>
                        <Typography className="product_price">
                          {product.price}
                        </Typography>
                        <Link
                          href="#dribbble-shot"
                          level="body-xs"
                          underline="none"
                          startDecorator={<Favorite />}
                          sx={{
                            fontWeight: "md",
                            ml: "140px",
                            color: "text.secondary",
                            "&:hover": { color: "danger.plainColor" },
                          }}
                        >
                          117
                        </Link>
                        <Link
                          href="#dribbble-shot"
                          level="body-xs"
                          underline="none"
                          startDecorator={<Visibility />}
                          sx={{
                            fontWeight: "md",
                            ml: "10px",
                            color: "text.secondary",
                            "&:hover": { color: "primary.plainColor" },
                          }}
                        >
                          10.4k
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CssVarsProvider>
  );
};

export default TrabdingProduct;

//  <CssVarsProvider>
//           <Swiper
//             slidesPerView={3}
//         spaceBetween={30}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//           >
//             {products.map((product) => (
//         <SwiperSlide key={product.id}>
//           <Card
//             variant="plain"
//             sx={{ width: 400, bgcolor: "initial", p: 0 }}
//           >
//             <Box sx={{ position: "relative" }}>
//               <AspectRatio ratio="4/5">
//                 <figure>
//                   <img src={product.image} alt={product.name} />
//                 </figure>
//               </AspectRatio>

//               <CardCover
//                 className="gradient-cover"
//                 sx={{
//                   "&:hover, &:focus-within": { opacity: 1 },
//                   opacity: 0,
//                   transition: "0.1s ease-in",
//                   cursor: "pointer",
//                 }}
//               >
//                 <div>
//                   <Box
//                     className="add_box"
//                     sx={{
//                       p: 2,
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1.5,
//                       flexGrow: 1,
//                       alignSelf: "flex-end",
//                     }}
//                   >
//                     <IconButton size="sm" variant="solid" color="danger">
//                       <Favorite />
//                     </IconButton>
//                     <Button  className="add_bag">Add to bag</Button>
//                   </Box>
//                 </div>
//               </CardCover>
//             </Box>

//             <Box flexDirection={"column"}>
//               <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//                 <Typography className="product_name">
//                   {product.name}
//                 </Typography>

//                 <Link
//                   href="#likes"
//                   level="body-xs"
//                   underline="none"
//                   startDecorator={<Favorite />}
//                   sx={{
//                     fontWeight: "md",
//                     ml: "auto",
//                     color: "text.secondary",
//                     "&:hover": { color: "danger.plainColor" },
//                   }}
//                 >
//                   {product.likes}
//                 </Link>

//                 <Link
//                   href="#views"
//                   level="body-xs"
//                   underline="none"
//                   startDecorator={<Visibility />}
//                   sx={{
//                     fontWeight: "md",
//                     color: "text.secondary",
//                     "&:hover": { color: "primary.plainColor" },
//                   }}
//                 >
//                   {product.views}
//                 </Link>
//               </Box>
//               <Typography className="product_price">
//                 From: {product.price}
//               </Typography>
//             </Box>
//           </Card>
//         </SwiperSlide>
//       ))}
//           </Swiper>
//         </CssVarsProvider>
