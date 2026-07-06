import React from "react";
import { motion } from "motion/react";

export default function Header() {
  const navItems = [
    { label: "01 // PROJECTS", href: "#projects" },
    { label: "02 // EXPERIENCE", href: "#experience" },
    { label: "03 // TECHNICAL SKILLS", href: "#skills" },
    { label: "04 // CONTACT", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      id="top-nav"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-cream border-t-[1.5px] border-ash pt-4 pb-4 px-6 md:px-12 lg:px-[72px] flex flex-col sm:flex-row justify-between items-center gap-4 select-none z-50 relative"
    >
      <a
        href="#"
        onClick={(e) => handleScroll(e, "#top-hero")}
        className="text-[16px] font-light text-voltage-blue tracking-tight hover:opacity-80 transition-opacity"
      >
        SUJAN A JAIN // PORTFOLIO
      </a>
      <div className="flex flex-wrap justify-center sm:justify-end gap-x-8 gap-y-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="text-[14px] md:text-[16px] font-light text-voltage-blue uppercase hover:underline underline-offset-4 decoration-voltage-blue/40 transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
