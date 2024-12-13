import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

const advantages = [
  {
    src: "/images/advantages-section/shield.png",
    alt: "Высокое качество и безопасность",
    title: "Высокое качество и безопасность",
  },
  {
    src: "/images/advantages-section/plastics.png",
    alt: "Широкий ассортимент продукции",
    title: "Широкий ассортимент продукции",
  },
  {
    src: "/images/advantages-section/hand-shaking.png",
    alt: "Индивидуальный подход",
    title: "Индивидуальный подход",
  },
  {
    src: "/images/advantages-section/watch.png",
    alt: "Надежность и стабильность",
    title: "Надежность и стабильность",
  },
  {
    src: "/images/advantages-section/ten-plus.png",
    alt: "Более 10 лет опыта",
    title: "Более 10 лет опыта",
  },
  {
    src: "/images/advantages-section/price.png",
    alt: "Гибкие условия и конкурентные цены",
    title: "Гибкие условия и конкурентные цены",
  },
];

const AdvantagesSection = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        mt={4}
        mb={5}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 5 }}
        >
          {'Почему выбирают "Мегапласт Азия"?'}
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={10}
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {advantages.map((advantage, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image
                src={advantage.src}
                alt={advantage.alt}
                width={80}
                height={80}
                style={{ marginBottom: "16px" }}
              />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {advantage.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AdvantagesSection;
