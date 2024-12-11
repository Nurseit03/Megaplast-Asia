'use client'
import { useRouter } from "next/navigation";
import { Link as MuiLink, LinkProps } from "@mui/material";

interface ILinkProps extends LinkProps {
  href: string;
  isActive?: boolean;
  activeColor?: string;
  color?: string;
}

function Link({
  children,
  href,
  isActive,
  activeColor,
  color,
  ...props
}: ILinkProps) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (href === "") return;

    if (props.target === "_blank") {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <MuiLink
      href={href}
      onClick={handleClick}
      color={isActive ? activeColor ?? "success.main" : color ?? "inherit"}
      underline="none"
      lineHeight="1.2"
      {...props}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
