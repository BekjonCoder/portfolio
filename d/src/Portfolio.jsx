import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return variants;
};

const Portfolio = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [language, setLanguage] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  const t = {
    uz: {
      name: "Bekjon Saidov",
      title: "Frontend Dasturchi | React | Tailwind | UI/UX",
      resume: "Rezyumeni Yuklab olish",
      chooseColor: "O'zingizga yoqqan rangni tanlang:",
      projects: "Loyihalar",
      skills: "Ko'nikmalar",
      contact: "Bog'lanish",
      send: "Yuborish",
      copyright: "Barcha huquqlar himoyalangan."
    },
    en: {
      name: "Bekjon Saidov",
      title: "Frontend Developer | React | Tailwind | UI/UX",
      resume: "Download Resume",
      chooseColor: "Pick your favorite color:",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      send: "Send",
      copyright: "All rights reserved."
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: `linear-gradient(to bottom, ${primaryColor}, black)` }}
    >
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow px-6 py-4 flex justify-between items-center border-b border-gray-700"
        initial="hidden"
        animate="show"
        variants={fadeIn("down", 0)}
      >
        <h1 className="text-xl font-bold">Bekjon</h1>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#projects" className="hover:text-blue-400">{t[language].projects}</a></li>
          <li><a href="#skills" className="hover:text-blue-400">{t[language].skills}</a></li>
          <li><a href="#contact" className="hover:text-blue-400">{t[language].contact}</a></li>
        </ul>

        <div className="flex gap-3 items-center">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white text-black px-2 py-1 rounded text-sm"
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
          <input
            type="color"
            value={primaryColor}
            onChange={handleColorChange}
            className="w-6 h-6 rounded-full border border-white cursor-pointer"
          />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-start gap-4 px-6 py-4 md:hidden">
            <a href="#projects" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>{t[language].projects}</a>
            <a href="#skills" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>{t[language].skills}</a>
            <a href="#contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>{t[language].contact}</a>
          </div>
        )}
      </motion.nav>

      <div className="pt-28 px-4">
        <motion.section
          id="hero"
          className="text-center py-16 md:py-24"
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0)}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t[language].name}</h1>
          <p className="text-lg md:text-2xl mb-6">{t[language].title}</p>
          <a href="/resume.pdf" download>
            <button
              style={{ backgroundColor: primaryColor }}
              className="text-white px-6 py-2 rounded-full text-lg hover:scale-105 transition"
            >
              {t[language].resume}
            </button>
          </a>
        </motion.section>

        <motion.section
          id="projects"
          className="max-w-5xl mx-auto mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("left", 0)}
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t[language].projects}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold mb-2">{language === "uz" ? `Loyiha ${i + 1}` : `Project ${i + 1}`}</h3>
                <p className="text-gray-300 text-sm">
                  {language === "uz"
                    ? "Bu yerda loyihaning qisqacha tavsifi bo'ladi. React, Tailwind, API bilan ishlash haqida yozish mumkin."
                    : "Brief description of the project. React, Tailwind, API integrations and more."}
                </p>
                <a href="#" className="text-sm text-blue-400 hover:underline mt-2 inline-block">GitHub</a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="max-w-5xl mx-auto mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("right", 0)}
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t[language].skills}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "API"].map((skill, i) => (
              <motion.span
                key={i}
                className="bg-slate-700 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="max-w-xl mx-auto mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0)}
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t[language].contact}
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={language === "uz" ? "Ismingiz" : "Your name"}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <textarea
              rows="5"
              placeholder={language === "uz" ? "Xabaringiz" : "Your message"}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              style={{ backgroundColor: primaryColor }}
              className="text-white px-6 py-2 rounded-full text-lg hover:scale-105 transition"
            >
              {t[language].send}
            </button>
          </form>
        </motion.section>

        <motion.footer
          className="text-center mt-20 text-gray-400 text-sm"
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.2)}
        >
          <p>© {new Date().getFullYear()} {t[language].name}. {t[language].copyright}</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Portfolio;