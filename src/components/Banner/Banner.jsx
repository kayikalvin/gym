import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = ({ image, title, subtitle, reverse }) => {
  return (
    <section className="border-t border-chalk/15">
      <div className="container">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-16 md:py-0 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative flex items-center justify-center md:border-r border-chalk/15 py-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              src={image}
              alt=""
              className="w-[260px] md:w-[320px] xl:w-[380px] h-full object-contain drop-shadow-hard"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-2 md:px-14 py-10 space-y-6">
            <motion.p
              variants={SlideUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="eyebrow"
            >
              On the floor
            </motion.p>
            <motion.h2
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display uppercase text-3xl md:text-4xl leading-[0.95]"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-steel max-w-[440px]"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a href="#program" className="ghost-btn">
                See the Program
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;