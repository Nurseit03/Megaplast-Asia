import { FC } from "react";
import { Typography, Box } from "@mui/material";

const HeroSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.10  ), rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.10)), url("/images/hero-section/background.png")`,
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundSize: "cover",
        backgroundPosition: "top center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {xs: "3.3rem", md: "4rem"},
            lineHeight: 1.2,
            marginBottom: "10px",
          }}
        >
          Пластиковые изделия
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "normal",
            fontSize: {xs: "1.5rem", md: "2rem"},
          }}
        >
          для вашей продукции
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          bottom: "100px", 
          left: "50%", 
          transform: "translateX(-50%)",
          fontSize: "1.5rem", 
          fontWeight: "600",
          width: "100%"
        }}
      >
        Делаем ваш бизнес легче и эффективнее
      </Typography>
    </Box>
  );
};

export default HeroSection;
