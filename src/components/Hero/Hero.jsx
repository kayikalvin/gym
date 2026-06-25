import React from "react";
import { motion } from "framer-motion";
import dumbellImage from "../../assets/dumbell.png";
import { FaPlay, FaArrowDown } from "react-icons/fa";
import { StatsData } from "../../mockData/data";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container relative grid grid-cols-1 md:grid-cols-2 min-h-[88vh] items-center pt-16 pb-10 md:pt-0">
        {/* Text */}
        <div className="relative z-10 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            Nairobi — Est. 2019
          </motion.p>

          <h1 className="font-display uppercase leading-[0.92] text-[15vw] md:text-[6vw] lg:text-[5.2rem]">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden"
            >
              Train
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden text-stroke"
            >
              Like It's
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden text-lime"
            >
              Owed
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-steel max-w-[420px] mt-7 text-base md:text-lg"
          >
            No mirrors angled for selfies. No smoothie bar. Just a floor,
            free weights, and coaches who'll tell you when your form is off.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-5 mt-9"
          >
            <a href="#pricing" className="primary-btn">
              Start Training
            </a>
            <button className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-chalk hover:text-lime transition-colors">
              <span className="w-10 h-10 rounded-full border border-chalk/30 flex items-center justify-center group-hover:border-lime">
                <FaPlay className="text-[10px]" />
              </span>
              Watch a Class
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src={dumbellImage}
              alt="Cast iron dumbbell"
              className="w-[260px] md:w-[420px] xl:w-[480px] drop-shadow-hard"
            />
            <div className="absolute -inset-x-10 -bottom-6 h-24 bg-lime/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Stat strip — barbell readout */}
      <div className="border-y border-chalk/15 bg-ironsoft">
        <div className="container grid grid-cols-2 md:grid-cols-4">
          {StatsData.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-7 px-4 md:px-6 ${
                i !== 0 ? "border-l border-chalk/15" : ""
              }`}
            >
              <p className="font-mono text-2xl md:text-3xl font-semibold">
                {stat.value}
                <span className="text-lime text-xs ml-1 align-top">
                  {stat.unit}
                </span>
              </p>
              <p className="text-steel text-xs uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center py-3 text-steel">
        <FaArrowDown className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;