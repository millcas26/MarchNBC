import { La_Belle_Aurore } from "next/font/google";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Title of your site",
  description: "Description of your site.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "New Page Example",
      href: "/new-page",
    },
    {
      label: "Recipes",
      href: "/recipes",
    },
    { 
      label: "About Me",
       href: "/aboutme",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    { label: "About Me",
       href: "/aboutme",
    }
  ],
};
