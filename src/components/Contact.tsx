import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Clear form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSubmitted(true);

    // Reset submitted banner after 6 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="w-full bg-cream select-none pb-12">
      {/* Display Serif Headline Section Opener */}
      <div className="w-full text-center py-[40px] md:py-[60px] border-b border-ash px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-light text-[56px] sm:text-[77px] md:text-[100px] text-voltage-blue leading-[1.0] max-w-4xl mx-auto tracking-[-0.03em] uppercase"
        >
          CONTACT & INQUIRIES
        </motion.h2>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-[72px] py-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Hand: Guidelines & Direct Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-12"
        >
          <div>
            <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-2">
              CONTACT DIRECTORY
            </span>
            <h3 className="text-[28px] font-light text-voltage-blue uppercase leading-tight mb-6">
              Let's craft the next digital system.
            </h3>
            <p className="text-[16px] md:text-[18px] font-normal text-black leading-relaxed mb-6 max-w-[450px]">
              Available for full-stack, backend, or cross-platform mobile developer opportunities. Use the form below to send a message or leverage direct contact links.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border-t border-ash pt-4">
              <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                PRIMARY EMAIL
              </span>
              <a
                href="mailto:ajainsujan@gmail.com"
                className="text-[18px] md:text-[21px] font-light text-black hover:text-voltage-blue transition-colors"
              >
                ajainsujan@gmail.com
              </a>
            </div>

            <div className="border-t border-ash pt-4">
              <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                MOBILE VOICE
              </span>
              <span className="text-[18px] md:text-[21px] font-light text-black">
                +91 8310183747
              </span>
            </div>

            <div className="border-t border-ash pt-4">
              <span className="text-[13px] font-light text-voltage-blue uppercase tracking-wider block mb-1">
                PROFESSIONAL LINKS
              </span>
              <div className="flex gap-6 mt-1">
                <a
                  href="https://linkedin.com/in/sujan-a-jain"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] font-light text-voltage-blue uppercase hover:underline underline-offset-4"
                >
                  LINKEDIN // ↗
                </a>
                <a
                  href="https://github.com/ajainsujan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] font-light text-voltage-blue uppercase hover:underline underline-offset-4"
                >
                  GITHUB // ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Hand: Elegant Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="border border-ash p-8 bg-cream flex flex-col gap-8">
            <div className="border-b border-ash pb-4">
              <span className="text-[14px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
                GET IN TOUCH //
              </span>
              <h3 className="text-[21px] font-light text-voltage-blue uppercase">
                MESSAGE FORM
              </h3>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="border border-voltage-blue p-4 bg-cream text-left overflow-hidden"
                >
                  <span className="text-[13px] font-light text-voltage-blue uppercase tracking-widest block mb-1">
                    MESSAGE RECEIVED
                  </span>
                  <p className="text-[15px] text-black">
                    Thank you. Your message was successfully recorded. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Form Input fields formatted as flat line-under items with labels */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-light text-voltage-blue uppercase tracking-wider">
                  01 // NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-ash py-2 text-[16px] md:text-[18px] text-black placeholder-black/30 focus:outline-none focus:border-voltage-blue transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-light text-voltage-blue uppercase tracking-wider">
                  02 // EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-ash py-2 text-[16px] md:text-[18px] text-black placeholder-black/30 focus:outline-none focus:border-voltage-blue transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-light text-voltage-blue uppercase tracking-wider">
                  03 // SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="e.g. Collaboration Proposal"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent border-b border-ash py-2 text-[16px] md:text-[18px] text-black placeholder-black/30 focus:outline-none focus:border-voltage-blue transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-light text-voltage-blue uppercase tracking-wider">
                  04 // MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your goals, requirements, and timeline details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-ash py-2 text-[16px] md:text-[18px] text-black placeholder-black/30 focus:outline-none focus:border-voltage-blue transition-colors resize-none rounded-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[60px] rounded-[60px] border-[1.5px] border-voltage-blue bg-transparent text-[16px] font-light text-voltage-blue uppercase tracking-wider hover:bg-voltage-blue hover:text-cream transition-all duration-300 cursor-pointer flex items-center justify-center text-center mt-4"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
