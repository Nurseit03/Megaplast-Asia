"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "@/components/ui/Link";
import MenuIcon from "@mui/icons-material/Menu";

interface INavMenuItem {
  href: string;
  title: string;
}

const Header = () => {
  const navMenuData: INavMenuItem[] = [
    { href: "/", title: "Главная" },
    { href: "#about-section", title: "О компании" },
    { href: "/product-catalog", title: "Каталог продукции" },
    { href: "#footer-section", title: "Контакты" },
  ];

  const isMobile = useMediaQuery("(max-width:900px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);

  const handleScrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar
      component="nav"
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        px: 2,
        transition: "transform 0.3s ease",
        backgroundColor: "white",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Link href="/">
            <Image
              src="/images/common/megaplast.png"
              alt="Megaplast Logo"
              width={200}
              height={50}
            />
          </Link>
        </Box>

        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box display="flex" gap={5}>
            {navMenuData.map((navItem, index) => (
              <Link key={index} href={navItem.href}>
                <Typography
                  variant="body1"
                  component="a"
                  color="text.primary"
                  sx={{
                    borderRadius: 2,
                    padding: "10px 15px",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(navItem.href);
                  }}
                >
                  {navItem.title}
                </Typography>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>

      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navMenuData.map((navItem, index) => (
            <ListItem
              key={index}
              onClick={handleDrawerToggle}
              component="a"
              href={navItem.href}
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemText primary={navItem.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </AppBar>
  );
};

export default Header;
