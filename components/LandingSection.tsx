"use client"

import { motion } from "framer-motion"
export const LandingSection = () => (
  <motion.main
    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="h-[600px] flex flex-col justify-center w-full gap-2 bg-zephImage bg-no-repeat bg-cover md:bg-center duration-300 ease-in-out"
  >
    <div className="flex gap-2">
      <motion.h4
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        👋 Hello, World!{" "}
      </motion.h4>
      <motion.h4
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        I'm Joseph De Leon
      </motion.h4>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <h1 className="font-extrabold mb-5">
        A{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.25 }}
          className="text-sky-500"
        >
          Web Developer
        </motion.span>{" "}
        based in the Philippines.
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.75 }}
        className="font-semibold"
      >
        Computer Engineer from Polytechnic University of the Philippines.
      </motion.p>
    </motion.div>
  </motion.main>
)
