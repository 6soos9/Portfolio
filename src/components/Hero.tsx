import React from "react";
import { motion } from "motion/react";
import Illustration from "./Illustration";
import { PERSONAL_INFO } from "../data";

// @ts-ignore
import sujanPortrait from "../assets/images/sujan.png";

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top-hero"
      className="w-full bg-cream py-[30px] md:py-[50px] px-6 md:px-12 lg:px-[72px] flex flex-col items-center select-none"
    >
      {/* Monumental Headline with Flanking Metadata */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-8 border-b border-ash pb-6"
      >
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-1 text-left lg:pb-2"
        >
          <span className="text-[14px] md:text-[16px] font-light text-voltage-blue uppercase tracking-widest">
            LOCATION // BENGALURU, INDIA
          </span>
          <span className="text-[18px] md:text-[21px] font-light text-voltage-blue opacity-90">
            +91 8310183747
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[1.5px] border-voltage-blue p-1.5 bg-cream flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-500"
          >
            <img 
              src={sujanPortrait} 
              alt="Sujan A Jain"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.97, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "-0.04em" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] min-[380px]:text-[40px] sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-extrabold text-voltage-blue leading-[0.85] text-center font-sans select-none my-4 lg:my-0 whitespace-nowrap"
          >
            SUJAN A JAIN
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-1 text-left lg:text-right lg:pb-2"
        >
          <span className="text-[14px] md:text-[16px] font-light text-voltage-blue uppercase tracking-widest">
            ROLE // FULL-STACK & MOBILE DEVELOPER
          </span>
          <span className="text-[18px] md:text-[21px] font-light text-voltage-blue opacity-90">
            ajainsujan@gmail.com
          </span>
        </motion.div>
      </motion.div>

      {/* Sub-headline quote or brief introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="max-w-[800px] text-center mb-8 px-4"
      >
        <p className="text-[18px] md:text-[21px] font-light text-black leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>
      </motion.div>

      {/* Flat Vector Illustration with Flanking CTA Columns */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-b border-ash py-8 md:py-12"
      >
        {/* Left CTA Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-ash pb-8 lg:pb-0"
        >
          <span className="text-[14px] md:text-[16px] font-light text-voltage-blue uppercase tracking-widest mb-2">
            CORE PLATFORM
          </span>
          <h3 className="text-[28px] md:text-[35px] font-light text-voltage-blue leading-tight mb-8">
            FLUTTER & DART
          </h3>
          <button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto h-[54px] rounded-[60px] border-[1.5px] border-voltage-blue bg-transparent px-[32px] text-[15px] font-light text-voltage-blue uppercase tracking-wider hover:bg-voltage-blue hover:text-cream transition-all duration-300 cursor-pointer text-center"
          >
            EXPLORE GRIT
          </button>
        </motion.div>

        {/* Central Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center py-6"
        >
          <div className="w-full max-w-[420px]">
            <Illustration type="tech" />
          </div>
        </motion.div>

        {/* Right CTA Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-3 flex flex-col items-start text-left px-4 lg:px-6 border-t lg:border-t-0 lg:border-l border-ash pt-8 lg:pt-0"
        >
          <span className="text-[14px] md:text-[16px] font-light text-voltage-blue uppercase tracking-widest mb-2">
            WEB SYSTEMS
          </span>
          <h3 className="text-[28px] md:text-[35px] font-light text-voltage-blue leading-tight mb-8">
            REACT & PYTHON
          </h3>
          <button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto h-[54px] rounded-[60px] border-[1.5px] border-voltage-blue bg-transparent px-[32px] text-[15px] font-light text-voltage-blue uppercase tracking-wider hover:bg-voltage-blue hover:text-cream transition-all duration-300 cursor-pointer text-center"
          >
            VIEW RECOMMENDATIONS
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
