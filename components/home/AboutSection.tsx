import { FC } from "react";
import Image from "next/image";
import GoToIcon from "@/public/icons/go-to.svg";
import { Typography, Box, Button } from "@mui/material";

const AboutSection: FC = () => {
  return (
    <Box
      id="about-section"
      component="section"
      sx={{
        height: "auto",
        backgroundImage: `url("/images/about-section-background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "30px",
        }}
      >
        <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
          <Image
            src={"/images/megaplast.png"}
            alt="logo"
            width={300}
            height={80}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "20px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ОсОО Мегапласт Азия — ведущий поставщик пластиковых компонентов
              для упаковки в Кыргызстане с более чем 10-летним опытом. Наша
              продукция предназначена для упаковки жидких и твердых товаров в
              различных отраслях, включая косметику, бытовую химию и
              фармацевтику.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                lineHeight: "1.8",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Мы предлагаем широкий ассортимент изделий, сочетающих надежность,
              безопасность и удобство в использовании. Наш многолетний опыт и
              партнерские отношения с крупными производителями и дистрибьюторами
              позволяют нам гарантировать стабильно высокое качество продукции.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              justifyItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src={"/images/product-1.png"}
              alt="Пластиковые пробирки"
              width={200}
              height={150}
              style={{ borderRadius: "8px" }}
            />
            <Image
              src={"/images/product-2.png"}
              alt="Процесс изготовления бутылок"
              width={200}
              height={150}
              style={{ borderRadius: "8px" }}
            />
            <Image
              src={"/images/product-3.png"}
              alt="Инструменты для дезинфекции"
              width={200}
              height={150}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          marginTop="20px"
        >
          <Image src={GoToIcon} width={45} height={100} alt="" />
          <Button
            sx={{
              p: "15px 20px",
              bgcolor: "#81CDF1",
              color: "black",
              height: "fit-content",
              textAlign: "center",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Typography fontWeight={600}>Каталог продукции</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
