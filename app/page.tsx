"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for rotation
  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [15, -15]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-15, 15]), {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute right-[10%] top-32 w-40 h-40 md:w-60 md:h-60"
      >
        <div className="cube-container">
          {["front", "back", "right", "left", "top", "bottom"].map((face) => (
            <motion.div
              key={face}
              className={`cube-face ${face} bg-gradient-to-br from-blue-400/30 to-indigo-500/30 backdrop-blur-sm border border-white/20`}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-white/50 text-xl font-bold">{face}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <main className="max-w-4xl mx-auto space-y-16 pt-20 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center sm:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hello, I'm Tiki.
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Computer Science Student at Duke University
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@duke.edu"
              className="px-6 py-3 border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Project 1",
                description: "Description of your awesome project",
                tech: ["React", "Node.js", "MongoDB"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Project 2",
                description: "Another cool project you've worked on",
                tech: ["Python", "TensorFlow", "AWS"],
                color: "from-indigo-500 to-purple-500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition relative group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold">Skills & Interests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Software Development",
              "Machine Learning",
              "Algorithms",
              "Web Development",
              "Data Structures",
              "Database Systems",
              "Cloud Computing",
              "Problem Solving",
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`p-4 text-center rounded-lg relative overflow-hidden ${
                  hoveredSkill === index
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-800'
                } transition-all duration-300`}
              >
                {skill}
                {hoveredSkill === index && (
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 text-center text-gray-600 dark:text-gray-400"
      >
        <p>© {new Date().getFullYear()} - Built with Next.js</p>
      </motion.footer>
    </div>
  );
}
