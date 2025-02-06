"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [text, setText] = useState("");
  const fullText = "HI I'M TIKI_";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [text]);

  const projects = [
    {
      title: "Resolve AI",
      description: "AI-powered goals tracking",
      tech: ["React Native", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Cube NME",
      description: "A better way to track new member education",
      tech: ["ReactJS", "Supabase", "TailwindCSS"],
      link: "#"
    }
  ];

  const skills = [
    "Software Development",
    "Machine Learning",
    "Algorithms",
    "Web Development",
  ];

  return (
    <main className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <div className="max-w-3xl mx-auto pt-20">
        {/* Typing effect for name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-3 h-8 bg-green-500 mr-2"
          />
          <h1 className="text-4xl inline-block">
            {text}
          </h1>
        </motion.div>

        {/* Bio section */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="space-y-1 mb-16"
          >
            <p className="text-zinc-500">// computer science student</p>
            <p className="text-zinc-500">// duke university</p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/kartikeyegupta" className="hover:text-white transition-colors">
                → github
              </a>
              <a href="mailto:kartikeye.gupta@duke.edu" className="hover:text-white transition-colors">
                → contact
              </a>
            </div>
          </motion.div>
        )}

        {/* Projects section */}
        {isComplete && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mb-16"
          >
            <h2 className="text-xl mb-8 text-zinc-500">projects[</h2>
            <div className="space-y-12 ml-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 3 }}
                  className="group"
                >
                  <div className="flex items-baseline">
                    <span className="text-green-500 mr-4">→</span>
                    <h3 className="text-xl group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-8 mt-2 space-y-2">
                    <p className="text-zinc-500">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-zinc-600">
                          #{tech.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <h2 className="text-xl mt-4 text-zinc-500">]</h2>
          </motion.section>
        )}

        {/* Skills section */}
        {isComplete && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <h2 className="text-xl mb-8 text-zinc-500">skills[</h2>
            <div className="grid grid-cols-2 gap-4 ml-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 3.5 }}
                  className="flex items-center group"
                >
                  <span className="text-green-500 mr-4">→</span>
                  <span className="group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
            <h2 className="text-xl mt-4 text-zinc-500">]</h2>
          </motion.section>
        )}

        {/* Footer */}
        {isComplete && (
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="mt-24 text-zinc-700 text-sm"
          >
            <p>© {new Date().getFullYear()} - Built with Next.js</p>
          </motion.footer>
        )}
      </div>
    </main>
  );
}
