"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VSCodeWrapper from './components/VSCodeWrapper';

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("javascript");
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

  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
  ];

  const getSyntax = () => {
    switch (language) {
      case "python":
        return {
          projects: "projects = [",
          skills: "skills = [",
          arrow: "->",
          comment: "#",
        };
      case "java":
        return {
          projects: "List<Project> projects = Arrays.asList(",
          skills: "List<String> skills = Arrays.asList(",
          arrow: "→",
          comment: "//",
        };
      default: // javascript
        return {
          projects: "const projects = [",
          skills: "const skills = [",
          arrow: "→",
          comment: "//",
        };
    }
  };

  const syntax = getSyntax();

  return (
    <VSCodeWrapper>
      <main className="min-h-screen bg-[#1e1e1e] text-green-500 p-8 font-mono">
        <div className="absolute top-4 right-4 flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              className={`px-3 py-1 rounded ${
                language === lang.id
                  ? "bg-green-500 text-black"
                  : "bg-zinc-800 text-green-500"
              } hover:bg-green-400 transition-colors`}
            >
              {lang.name}
            </button>
          ))}
        </div>

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
              <p className="text-zinc-500">{`${syntax.comment} computer science student`}</p>
              <p className="text-zinc-500">{`${syntax.comment} duke university`}</p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/kartikeyegupta" className="hover:text-white transition-colors">
                  → github
                </a>
                <a href="mailto:kartikeye.gupta@duke.edu" className="hover:text-white transition-colors">
                  → contact
                </a>
              </div>
      e      </motion.div>
          )}

          {/* Projects section */}
          {isComplete && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="mb-16"
            >
              <h2 className="text-xl mb-8 text-zinc-500">{syntax.projects}</h2>
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
                      <span className="text-green-500 mr-4">{syntax.arrow}</span>
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
              <h2 className="text-xl mb-8 text-zinc-500">{syntax.skills}</h2>
              <div className="grid grid-cols-2 gap-4 ml-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 3.5 }}
                    className="flex items-center group"
                  >
                    <span className="text-green-500 mr-4">{syntax.arrow}</span>
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
    </VSCodeWrapper>
  );
}
