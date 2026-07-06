import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import Illustration from "./Illustration";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="w-full bg-cream select-none">
      {/* Display Serif Headline Section Opener */}
      <div className="w-full text-center py-[40px] md:py-[60px] border-b border-ash px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-light text-[56px] sm:text-[77px] md:text-[100px] text-voltage-blue leading-[1.0] max-w-4xl mx-auto tracking-[-0.03em] uppercase"
        >
          SELECTED PROJECTS
        </motion.h2>
      </div>

      {/* Filter Menu Bar matching the Nav Rule Bar style */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full border-b border-ash px-6 md:px-12 lg:px-[72px] py-4 flex justify-center sm:justify-start gap-8 flex-wrap"
      >
        <button
          onClick={() => setFilter("all")}
          className={`text-[15px] font-light uppercase tracking-wider transition-all cursor-pointer ${
            filter === "all"
              ? "text-voltage-blue underline underline-offset-8 decoration-voltage-blue decoration-[1.5px]"
              : "text-voltage-blue/60 hover:text-voltage-blue"
          }`}
        >
          [ 00 // ALL PROJECTS ]
        </button>
        <button
          onClick={() => setFilter("mobile")}
          className={`text-[15px] font-light uppercase tracking-wider transition-all cursor-pointer ${
            filter === "mobile"
              ? "text-voltage-blue underline underline-offset-8 decoration-voltage-blue decoration-[1.5px]"
              : "text-voltage-blue/60 hover:text-voltage-blue"
          }`}
        >
          [ 01 // MOBILE DEVELOPMENT ]
        </button>
        <button
          onClick={() => setFilter("web")}
          className={`text-[15px] font-light uppercase tracking-wider transition-all cursor-pointer ${
            filter === "web"
              ? "text-voltage-blue underline underline-offset-8 decoration-voltage-blue decoration-[1.5px]"
              : "text-voltage-blue/60 hover:text-voltage-blue"
          }`}
        >
          [ 02 // FULL-STACK DEVELOPMENT ]
        </button>
      </motion.div>

      {/* Projects List/Grid Stack */}
      <motion.div 
        layout
        className="w-full px-6 md:px-12 lg:px-[72px] py-8 flex flex-col gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={project.id}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ash pb-10"
              >
                {/* Project Graphics Illustration */}
                <div className="lg:col-span-5 border border-ash bg-cream p-4">
                  <Illustration
                    type={project.graphicSeed as any}
                    className="w-full h-auto aspect-video object-contain"
                  />
                </div>

                {/* Project Narrative Column */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="w-full flex justify-between items-start gap-4 flex-wrap mb-4">
                    <div>
                      <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest">
                        {project.period}
                      </span>
                      <h3 className="text-[28px] md:text-[35px] font-light text-voltage-blue leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Category Pill Tag */}
                    <span className="h-[28px] rounded-[60px] border border-voltage-blue px-3 text-[12px] font-light text-voltage-blue flex items-center justify-center uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-[16px] text-voltage-blue/80 font-light mb-6 italic">
                    {project.subtitle}
                  </p>

                  {/* Bullets Copy Block */}
                  <ul className="flex flex-col gap-4 text-black text-[16px] md:text-[18px] font-normal leading-relaxed mb-8 max-w-[700px] list-disc list-inside">
                    {project.descriptionPoints.map((point, pIdx) => (
                      <li key={pIdx} className="pl-2 indent-[-1.5em] ml-6">
                        <span className="text-black">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Pills row */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="h-[32px] rounded-[60px] border border-ash px-4 text-[13px] font-light text-black uppercase flex items-center justify-center tracking-wide bg-cream"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions row: View Source */}
                  <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto h-[54px] rounded-[60px] border-[1.5px] border-voltage-blue bg-transparent px-[32px] text-[15px] font-light text-voltage-blue uppercase tracking-wider hover:bg-voltage-blue hover:text-cream transition-all duration-300 cursor-pointer flex items-center justify-center text-center"
                      >
                        GITHUB REPOSITORY
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
