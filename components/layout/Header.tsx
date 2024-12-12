import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "@/components/ui/Link";

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

  return (
    <AppBar
      component="nav"
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: 2 }}
    >
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
