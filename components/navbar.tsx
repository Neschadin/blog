import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full px-10">
        <NextLink href="/">
          <p className="font-bold">HOME</p>
        </NextLink>

        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
