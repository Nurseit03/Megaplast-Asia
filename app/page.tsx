import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Megaplast Asia",
  keywords: ["megaplast", "megaplast asia", "Megaplast"],
  description: "Megaplast",
};
export default function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
    </Box>
  );
}
