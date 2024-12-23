"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GoToIcon from "@/public/icons/go-to.svg";
import { Typography, Box, Button, useMediaQuery } from "@mui/material";

const AboutSection: FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      id="about-section"
      component="section"
      sx={{
        height: "auto",
        backgroundImage: `url("/images/about-section/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            src={"/images/common/megaplast.png"}
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
          <Box display="flex" flexDirection="column" gap="20px">
            <Typography
              variant="body1"
              sx={{
                fontSize: "17.7px",
                lineHeight: "1.8",
                textAlign: { xs: "justify", md: "left" },
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
                fontSize: "17.7px",
                lineHeight: "1.8",
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              Мы предлагаем широкий ассортимент изделий, сочетающих надежность,
              безопасность и удобство в использовании. Наш многолетний опыт и
              партнерские отношения с крупными производителями и дистрибьюторами
              позволяют нам гарантировать стабильно высокое качество продукции.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "17.7px",
                lineHeight: "1.8",
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              Мы ценим каждого клиента и предоставляем индивидуальный подход,
              предлагая решения, которые наилучшим образом соответствуют
              потребностям вашего бизнеса на всех этапах сотрудничества.
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
              src={"/images/about-section/product-1.png"}
              alt="Пластиковые пробирки"
              width={200}
              height={150}
              style={{ borderRadius: "8px" }}
            />
            <Image
              src={"/images/about-section/product-2.png"}
              alt="Процесс изготовления бутылок"
              width={200}
              height={150}
              style={{ borderRadius: "8px" }}
            />
            <Image
              src={"/images/about-section/product-3.png"}
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
          <Image
            src={GoToIcon}
            width={45}
            height={100}
            alt=""
            style={{
              position: isMobile ? "absolute" : "unset",
              transform: isMobile ? "translateX(-150%)" : "unset",
            }}
          />
          <Button
            sx={{
              p: "15px 20px",
              bgcolor: "#81CDF1",
              color: "black",
              height: "fit-content",
              textAlign: "center",
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={() => router.push("/product-catalog")}
          >
            <Typography fontWeight={600}>Каталог продукции</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
