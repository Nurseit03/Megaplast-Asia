"use client";

import {
  Box,
  Stack,
  Container,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "@/components/ui/Link";
import InstagramIcon from "@/public/icons/instagram.svg";
import LocationIcon from "@/public/icons/location.svg";
import MailIcon from "@/public/icons/mail.svg";
import PhoneIcon from "@/public/icons/phone.svg";

interface IFooterDataItem {
  title: string;
  link: string;
  icon: StaticImageData;
}

interface IFooterSection {
  items: IFooterDataItem[];
}

const Footer = () => {
  const footerData: Record<string, IFooterDataItem[]> = {
    Info: [
      { icon: PhoneIcon, title: "+996 (708) 420-072", link: "tel:+996708420072" },
      {
        icon: MailIcon,
        title: "megaplastazia@gmail.com",
        link: "mailto:megaplastazia@gmail.com",
      },
      { icon: InstagramIcon, title: "megaplast_azia", link: "https://www.instagram.com/megaplast_azia/" },
      {
        icon: LocationIcon,
        title: "Кыргызстан, г. Бишкек, ж/м Алтын-Казык, Ак-Жол 2/1",
        link: "https://go.2gis.com/p89ao",
      },
    ],
  };

  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box
      component="footer"
      id="footer-section"
      py={3}
      px={2}
      sx={{
        backgroundImage: 'url("/images/footer-section/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "center" : "flex-start"}
          spacing={2}
        >
          {Object.entries(footerData).map(([title, items]) => (
            <FooterSection key={title} items={items} />
          ))}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexShrink: 0 }}
          >
            <Image
              src={"/images/common/megaplast.png"}
              alt="logo"
              width={200}
              height={50}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const FooterSection: React.FC<IFooterSection> = ({ items }) => {
  return (
    <section>
      <List>
        {items.map(({ title, link, icon }, index) => (
          <ListItem
            sx={{
              padding: index === items.length - 1 ? "0" : "0 0 24px 0",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
            key={index}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "17.7px" }}>
              <Link href={link} color="black" sx={{ textDecoration: "none" }}>
                <Image src={icon} alt={title} width={20} height={20} />
              </Link>
              <Link href={link} color="black" sx={{ textDecoration: "none" }}>
                {title}
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Footer;
