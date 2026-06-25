import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <section className="bg-lime text-iron py-20 md:py-28">
      <div className="container flex flex-col items-center text-center space-y-7">
        <motion.p
          variants={SlideUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-widest2"
        >
          First 14 Days
        </motion.p>
        <motion.h2
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display uppercase text-4xl md:text-6xl leading-[0.95] max-w-3xl"
        >
          Half Off, No Contract, No Excuse Left
        </motion.h2>
        <motion.p
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[480px] text-iron/70"
        >
          Bring a gym bag and a number you want to beat. We'll handle the
          programming, the spotting, and the noise.
        </motion.p>
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <a
            href="#pricing"
            className="bg-iron text-chalk font-mono font-semibold uppercase tracking-widest text-xs py-4 px-7 hover:-translate-y-0.5 transition-transform duration-300"
          >
            Claim the Offer
          </a>
          <a
            href="#trainer"
            className="border-2 border-iron text-iron font-mono font-semibold uppercase tracking-widest text-xs py-4 px-7 hover:bg-iron hover:text-chalk transition-colors duration-300"
          >
            Talk to a Coach
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner2;