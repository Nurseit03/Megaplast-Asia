import Head from "next/head";
import { Container, Box } from "@mui/material";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Megaplast Asia</title>
        <meta name="keywords" content="megaplast, megaplast asia, Megaplast" />
        <meta name="description" content="Megaplast" />
      </Head>

      {/* <Container> */}
        <Box display="flex" flexDirection="column">
          <HeroSection />
          {/* <MoreSection />
          <ServicesSection /> */}
        </Box>
      {/* </Container> */}
    </>
  );
}
