import { Youtube, Instagram, Twitter } from "lucide-react";
import blogImage from "@/../public/images/blog_img.png";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export const socials = [
  {
    icon: Instagram,
    link: "#",
  },
  {
    icon: Youtube,
    link: "#",
  },
  {
    icon: Twitter,
    link: "#",
  },
];

export const blogs = [
  {
    id: 1,
    image: blogImage,
    title: "How to create a navigation bar",
    description:
      "navigation bar consist of your web logo, navigation links and action buttons, however, you can create unique navigations based on your website genre",
  },
  {
    id: 2,
    image: blogImage,
    title: "How to create a navigation bar",
    description:
      "navigation bar consist of your web logo, navigation links and action buttons, however, you can create unique navigations based on your website genre",
  },
  {
    id: 3,
    image: blogImage,
    title: "How to create a navigation bar",
    description:
      "navigation bar consist of your web logo, navigation links and action buttons, however, you can create unique navigations based on your website genre",
  },
];
