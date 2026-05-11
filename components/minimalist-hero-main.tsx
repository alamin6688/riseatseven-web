"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "PRODUCT", href: "#" },
    { label: "STORE", href: "#" },
    { label: "ABOUT US", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <MinimalistHero
      logoText="Rise At Seven."
      navLinks={navLinks}
      mainText={[
        "#1 Most recommended",
        "content marketing agency",
        "on every searchable ",
        "platform",
      ]}
      readMoreLink="#"
      imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={["We", "Create", "Category", "Leaders"]}
      socialLinks={socialLinks}
      locationText="4 Global Offices serving UK, USA (New York) & EU"
    />
  );
};

export default MinimalistHeroDemo;
