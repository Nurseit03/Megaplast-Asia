"use client";

import { FC } from "react";
import Image from "next/image";
import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import PreformsImage from "@/public/images/product-catalog/pet-preforms.png";

const PreformsSection: FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
      <Box
        component="section"
        sx={{
          backgroundImage: 'url("/images/product-catalog/background.png")',
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: "45px 20px", md: "80px 20px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "40px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "24px" : "36px",
            color: "#333",
          }}
        >
          ПЕТ-Преформы
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={PreformsImage}
            width={isMobile ? 350 : 500}
            height={isMobile ? 200 : 250}
            alt="Преформы"
            style={{ borderRadius: "8px" }}
          />
          <Typography
            sx={{
              maxWidth: "600px",
              fontSize: "18px",
              lineHeight: 1.8,
              textAlign: isMobile ? "justify" : "left",
            }}
          >
            ПЭТ-преформы — это заготовки из полиэтилентерефталата, используемые
            для производства пластиковых бутылок различных объемов и форм. Они
            отличаются высокой прочностью, прозрачностью и устойчивостью к
            внешним воздействиям.
          </Typography>
        </Stack>

        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "16px", color: "#333" }}
          >
            Наш ассортимент включает:
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, sm: 4, md: 20 }}
            justifyContent="space-between"
            textAlign="left"
          >
            <Typography sx={{ maxWidth: "300px", lineHeight: 1.6 }}>
              <Typography sx={{ fontWeight: 600, color: "#333" }}>
                • Огромный выбор размеров и веса:
              </Typography>{" "}
              от легких до более тяжелых для крупной тары.
            </Typography>
            <Typography sx={{ maxWidth: "300px", lineHeight: 1.6 }}>
              <Typography sx={{ fontWeight: 600, color: "#333" }}>
                • Разнообразие цветов:
              </Typography>{" "}
              прозрачные, синие, зеленые и другие оттенки.
            </Typography>
          </Stack>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "16px", color: "#333" }}
          >
            Преформы для разных типов горловин:
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, sm: 4, md: 20 }}
            justifyContent="space-between"
            textAlign="left"
          >
            <Typography
              sx={{
                maxWidth: "300px",
                lineHeight: 1.6,
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  fontSize: { xs: "17px", md: "17.3px" },
                }}
              >
                PCO 1810
              </Typography>{" "}
              — вариант с высоким горлышком, который обеспечивает дополнительную
              прочность и устойчивость к давлению.
            </Typography>
            <Typography
              sx={{
                maxWidth: "300px",
                lineHeight: 1.6,
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  fontSize: { xs: "17px", md: "17.3px" },
                }}
              >
                PCO 1881
              </Typography>{" "}
              — вариант с низким горлышком, который снижает вес готовой упаковки
              и оптимизирует расход сырья.
            </Typography>
          </Stack>
        </Box>

        <Stack
          sx={{ mr: { xs: "0", sm: "0", md: "35px" }, gap: { xs: "15px" } }}
        >
          <Typography
            sx={{
              maxWidth: "800px",
              lineHeight: 1.6,
              textAlign: isMobile ? "justify" : "center",
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            Диаметр горловины для обоих стандартов составляет 28 мм, что делает
            их <br />
            совместимыми с большинством крышек и позволяет адаптироваться к
            различным <br />
            потребностям производства.
          </Typography>
          <Typography
            sx={{
              maxWidth: "710px",
              lineHeight: 1.6,
              textAlign: isMobile ? "justify" : "center",
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            Все ПЭТ-преформы соответствуют современным стандартам качества и
            подходят для использования в пищевой, косметической, химической и
            других отраслях. Мы готовы помочь вам выбрать идеальный вариант для
            вашего проекта.
          </Typography>
        </Stack>
      </Box>
  );
};

export default PreformsSection;
