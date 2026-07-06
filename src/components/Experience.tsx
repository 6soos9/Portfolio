import React from "react";
import { motion } from "motion/react";
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from "../data";
import Illustration from "./Illustration";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-cream select-none border-b border-ash">
      {/* Display Serif Headline Section Opener */}
      <div className="w-full text-center py-[40px] md:py-[60px] border-b border-ash px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-light text-[56px] sm:text-[77px] md:text-[100px] text-voltage-blue leading-[1.0] max-w-4xl mx-auto tracking-[-0.03em] uppercase"
        >
          EXPERIENCE & EDUCATION
        </motion.h2>
      </div>

      {/* Main Grid: Work Experience & Education side-by-side on desktop */}
      <div className="w-full px-6 md:px-12 lg:px-[72px] py-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Work Experience Simulation */}
        <div className="flex flex-col gap-12">
          <div className="border-b border-ash pb-4 mb-2">
            <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
              SECTION 01
            </span>
            <h3 className="text-[28px] font-light text-voltage-blue uppercase">
              PROFESSIONAL EXPERIENCE
            </h3>
          </div>

          {EXPERIENCE_DATA.map((exp, expIdx) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: expIdx * 0.1, ease: "easeOut" }}
              className="border border-ash p-6 md:p-8 bg-cream flex flex-col gap-8"
            >
              {/* Metadata over value pattern */}
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-ash">
                <div>
                  <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                    ROLE
                  </span>
                  <span className="text-[18px] md:text-[21px] font-light text-black block leading-tight">
                    {exp.role}
                  </span>
                </div>
                <div>
                  <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                    COMPANY
                  </span>
                  <span className="text-[18px] md:text-[21px] font-light text-black block leading-tight">
                    {exp.company}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-ash">
                <div>
                  <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                    DURATION
                  </span>
                  <span className="text-[18px] md:text-[21px] font-light text-voltage-blue block">
                    {exp.period}
                  </span>
                </div>
                <div>
                  <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                    PROJECT TYPE
                  </span>
                  <span className="text-[18px] md:text-[21px] font-light text-black block">
                    Forage Simulation
                  </span>
                </div>
              </div>

              {/* Narratives Copy Block */}
              <div>
                <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-4">
                  KEY RESPONSIBILITIES & OUTCOMES
                </span>
                <ul className="flex flex-col gap-3 text-black text-[16px] md:text-[18px] font-normal leading-relaxed list-disc list-inside">
                  {exp.descriptionPoints.map((point, idx) => (
                    <li key={idx} className="pl-1 indent-[-1.5em] ml-6">
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customized Flat Vector representation */}
              <div className="border border-ash p-4">
                <Illustration type="analytics" className="w-full max-h-[220px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Education Timeline */}
        <div className="flex flex-col gap-12">
          <div className="border-b border-ash pb-4 mb-2">
            <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
              SECTION 02
            </span>
            <h3 className="text-[28px] font-light text-voltage-blue uppercase">
              EDUCATION HISTORY
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className="border-b border-ash pb-8 last:border-b-0 flex flex-col gap-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[16px] font-mono text-voltage-blue font-light">
                    0{idx + 1} //
                  </span>
                  <span className="text-[15px] font-light text-voltage-blue uppercase tracking-widest">
                    {edu.period}
                  </span>
                </div>

                {/* Using label-over-value editorial metadata layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                      DEGREE / PROGRAM
                    </span>
                    <span className="text-[18px] md:text-[21px] font-light text-black block leading-tight">
                      {edu.degree}
                    </span>
                  </div>
                  <div>
                    <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                      INSTITUTION
                    </span>
                    <span className="text-[18px] md:text-[21px] font-light text-black block leading-tight">
                      {edu.institution}
                    </span>
                  </div>
                </div>

                {edu.details && (
                  <div className="mt-1">
                    <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                      GRADE / STATUS
                    </span>
                    <span className="text-[16px] font-mono text-black">
                      {edu.details}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Row Block - Full Bleed Band with Dividers */}
      <div className="w-full border-t border-ash px-6 md:px-12 lg:px-[72px] py-10 bg-cream">
        <div className="border-b border-ash pb-4 mb-6">
          <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
            SECTION 03
          </span>
          <h3 className="text-[28px] font-light text-voltage-blue uppercase">
            CERTIFICATIONS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, certIdx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: certIdx * 0.1, ease: "easeOut" }}
              className="border border-ash p-6 bg-cream flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                  CREDENTIAL
                </span>
                <h4 className="text-[18px] md:text-[20px] font-light text-black leading-tight mb-4">
                  {cert.name}
                </h4>
              </div>

              <div className="flex justify-between items-end gap-2 pt-4 border-t border-ash/60">
                <div>
                  <span className="text-[11px] font-light text-voltage-blue uppercase tracking-widest block">
                    ISSUER
                  </span>
                  <span className="text-[14px] font-light text-black uppercase">
                    {cert.issuer}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-light text-voltage-blue uppercase tracking-widest block">
                    DATE
                  </span>
                  <span className="text-[14px] font-mono text-voltage-blue">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
