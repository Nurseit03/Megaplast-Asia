import type { Metadata } from "next";
import PreformsSection from "@/components/product-catalog/PreformsSection";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Megaplast Asia",
  keywords: ["megaplast", "megaplast asia", "Megaplast"],
  description: "Megaplast",
};

export default function ProductCatalog() {
  return (
    <Box display="flex" flexDirection="column">
      <PreformsSection />
    </Box>
  );
}
