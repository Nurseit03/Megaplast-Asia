"use client";

import { useState } from "react";
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
    {
      href: "/",
      title: "Главная",
    },
    {
      href: "#about-section",
      title: "О компании",
    },
    {
      href: "/products-catalog",
      title: "Каталог продукции",
    },
    {
      href: "#footer-section",
      title: "Контакты",
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer); // Toggle the drawer
  };

  return (
    <AppBar
      component="nav"
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: 2 }}
    >
      <Toolbar>
        {/* Left: Logo */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Link href="/">
            <Image
              src="/images/megaplast.png"
              alt="Megaplast Logo"
              width={200}
              height={50}
            />
          </Link>
        </Box>

        {/* Right: Menu Icon (for Mobile) */}
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop Menu
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
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
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
            >
              <ListItemText primary={navItem.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
