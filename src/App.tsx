/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-cream selection:bg-voltage-blue selection:text-cream flex flex-col border-t-8 border-voltage-blue"
    >
      {/* Sticky top-bar Header */}
      <Header />

      {/* Main Sections Stack */}
      <main className="flex-grow flex flex-col">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <footer className="w-full bg-cream border-t border-ash py-12 px-6 md:px-16 lg:px-[144px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="text-[13px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
              PORTFOLIO EDITION
            </span>
            <span className="text-[16px] font-light text-black">
              SUJAN JAIN // YEAR 2026
            </span>
          </div>

          <div className="hover:text-voltage-blue transition-colors font-mono text-[13px] text-voltage-blue/70">
            <a 
              href="#top-nav" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#top-nav")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              [ RETURN TO TOP ↑ ]
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

