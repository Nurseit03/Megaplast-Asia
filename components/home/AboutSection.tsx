import { FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";

const AboutSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        backgroundImage: `url("/images/about-section-background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "inherit",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src={"/images/megaplast.png"}
          alt="logo"
          width={300}
          height={80}
        />
        <Button sx={{p: "15px 20px", bgcolor: "#81CDF1", color: "black"}}>
          <Typography fontWeight={600}>Каталог продукции</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
