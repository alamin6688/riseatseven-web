"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string | string[];
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: string[];
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  // readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 pb-0 font-sans",
        className,
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content - Staggered Mirror Version */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 flex flex-col items-center justify-end text-center md:items-end md:justify-end md:text-right md:pr-20 lg:pr-24 md:pb-16 lg:pb-24"
        >
          <div className="flex flex-col gap-1 mb-6 space-y-1">
            {Array.isArray(mainText) ? (
              mainText.map((line, index) => {
                const offsets = [
                  "md:-translate-x-6",
                  "md:-translate-x-10",
                  "md:-translate-x-10",
                  "md:-translate-x-8",
                ];
                const offsetClass = offsets[index] || "md:-translate-x-0";
                const highlightText = (text: string) => {
                  const parts = text.split(/(#1|marketing agency)/gi);
                  return parts.map((part, i) =>
                    part.toLowerCase() === "#1" ||
                    part.toLowerCase() === "marketing agency" ? (
                      <span key={i} className="text-[#E5B401]">
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  );
                };

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className={cn(
                      "text-xs md:text-sm lg:text-base font-black uppercase tracking-widest text-foreground/90 max-w-[200px] md:max-w-xs",
                      offsetClass,
                    )}
                  >
                    {highlightText(line)}
                  </motion.p>
                );
              })
            ) : (
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
                {mainText}
              </p>
            )}
          </div>
          {/* <a
            href={readMoreLink}
            className="text-sm font-medium text-foreground underline decoration-from-font md:-translate-x-4"
          >
            Read More
          </a> */}
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full translate-y-12 md:translate-y-20 lg:translate-y-28">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-56 object-cover md:w-64 scale-[1.6] lg:w-72 lg:scale-[1.7]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* Right Text - Staggered Offset Version */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex flex-col items-center justify-end text-center md:items-start md:justify-end md:text-left md:pb-16 lg:pb-24"
        >
          <h1 className="flex flex-col gap-1 text-5xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl space-y-4">
            {overlayText.map((line, index) => {
              // Calculate horizontal offset to follow a circular curve
              const offsets = [
                "md:translate-x-14",
                "md:translate-x-20",
                "md:translate-x-20",
                "md:translate-x-16",
              ];
              const offsetClass = offsets[index] || "md:translate-x-0";

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className={cn(
                    "block leading-[0.85] italic",
                    offsetClass,
                    index === overlayText.length - 1 && "text-[#E5B401]",
                  )}
                >
                  {line}
                </motion.span>
              );
            })}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
