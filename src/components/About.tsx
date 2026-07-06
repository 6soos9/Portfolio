import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";

export default function About() {
  return (
    <section id="skills" className="w-full bg-cream select-none border-b border-ash">
      {/* Display Serif Headline Section Opener */}
      <div className="w-full text-center py-[40px] md:py-[60px] border-b border-ash px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-light text-[56px] sm:text-[77px] md:text-[100px] text-voltage-blue leading-[1.0] max-w-4xl mx-auto tracking-[-0.03em] uppercase"
        >
          TECHNICAL EXPERTISE
        </motion.h2>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-[72px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Introductory block card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border border-ash p-8 bg-cream flex flex-col justify-between min-h-[300px] lg:col-span-1"
          >
            <div>
              <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-2">
                00 // DEVELOPMENT PHILOSOPHY
              </span>
              <h3 className="text-[28px] font-light text-voltage-blue leading-tight uppercase mb-4">
                Architecture & Intent
              </h3>
              <p className="text-[16px] md:text-[18px] font-normal text-black leading-relaxed">
                A focus on local-first engineering, offline availability, low latency, and intuitive modular layers. Using the right tool for the right engineering task is paramount.
              </p>
            </div>
            <div className="pt-6 border-t border-ash text-[13px] font-light text-voltage-blue uppercase tracking-wider">
              [ STACK SELECTION ]
            </div>
          </motion.div>

          {/* Render the core categories */}
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx + 1) * 0.1, ease: "easeOut" }}
              className="border border-ash p-8 bg-cream flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-2">
                  0{idx + 1} // {category.name.toUpperCase()}
                </span>
                <h3 className="text-[28px] font-light text-voltage-blue leading-tight uppercase mb-6">
                  {category.name}
                </h3>
                
                {/* 60px Pill list of technology elements */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="h-[36px] rounded-[60px] border border-ash px-4 text-[14px] font-light text-black uppercase flex items-center justify-center tracking-wide bg-cream hover:border-voltage-blue hover:text-voltage-blue transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-ash text-[13px] font-light text-voltage-blue uppercase tracking-wider">
                [ SKILLS MATRIX ]
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
