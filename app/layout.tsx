import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import theme from "@/styles/theme"; 
import ScrollToTopFab from "@/components/ui/ScrollToTopFab";

export const metadata: Metadata = {
  title: "Megaplast Asia",
  description: "Megaplast Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Header />
            {children}
            <Footer />
            <ScrollToTopFab />
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
