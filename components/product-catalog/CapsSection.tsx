"use client";

import { FC } from "react";
import Image from "next/image";
import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import CapsImage from "@/public/images/product-catalog/caps.png";

const CapsSection: FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      component="section"
      sx={{
        padding: "60px 20px",
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
        Колпачки
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={CapsImage}
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
          Колпачки — это важный элемент упаковки, обеспечивающий герметичность,
          удобство использования и надежность при транспортировке. Они
          гарантируют защиту содержимого от внешних воздействий. Мы предлагаем
          широкий ассортимент колпачков для различных нужд.
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
          <Box sx={{ maxWidth: "300px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              • Однокомпонентные колпачки:
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "17.3px" },
                lineHeight: 1.6,
              }}
            >
              Простые и экономичные решения, состоящие из одного элемента.
              Идеально подходят для продуктов, где герметичность и простота
              важнее функциональных дополнительных свойств.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              • Двухкомпонентные колпачки:
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "17.3px" },
                lineHeight: 1.6,
              }}
            >
              {" "}
              Состоят из нескольких частей, что обеспечивает повышенную
              герметичность и удобство открывания. Отлично подходят для напитков
              и газированных продуктов, требующих защиты от утечки или потери
              газа.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#333" }}
        >
          Разные стандарты горловин:
        </Typography>
        <Stack
          direction="column"
          spacing={4}
          justifyContent="space-between"
          textAlign="left"
          alignItems="left"
          width="100%"
        >
          <Typography
            sx={{
              maxWidth: "610px",
              lineHeight: 1.6,
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                mr: "8px",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              •
            </Typography>{" "}
            Для высокого горла{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              (PCO 1810)
            </Typography>{" "}
            — обеспечивает плотное закрытие для бутылок с увеличенной высотой
            горловины.
          </Typography>
          <Typography
            sx={{
              maxWidth: "610px",
              lineHeight: 1.6,
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                mr: "8px",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              •
            </Typography>{" "}
            Для низкого горла{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              (PCO 1881)
            </Typography>{" "}
            — облегченные колпачки, оптимизированные для экономии сырья
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#333" }}
        >
          Диаметры горловины:
        </Typography>
        <Stack
          direction="column"
          spacing={3.5}
          justifyContent="space-between"
          textAlign="left"
          alignItems="left"
          width={"100%"}
        >
          <Typography
            sx={{
              maxWidth: "610px",
              lineHeight: 1.6,
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                mr: "8px",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              •
            </Typography>{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              28 мм
            </Typography>{" "}
            — стандарт для большинства напитков и воды.
          </Typography>
          <Typography
            sx={{
              maxWidth: "610px",
              lineHeight: 1.6,
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                mr: "8px",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              •
            </Typography>{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              38 мм
            </Typography>{" "}
            — используется для упаковки молочной продукции, соков и других
            жидкостей
          </Typography>

          <Typography
            sx={{
              maxWidth: "610px",
              lineHeight: 1.6,
              fontSize: { xs: "17px", md: "17.3px" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                mr: "8px",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              •
            </Typography>{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: { xs: "17px", md: "17.3px" },
              }}
            >
              48 мм
            </Typography>{" "}
            — подходит для крупной тары и продуктов с высоким объемом.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CapsSection;
