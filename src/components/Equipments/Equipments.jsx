import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const ProgramData = [
  {
    id: "01",
    title: "Yoga & Mobility",
    desc: "Slow, controlled work that keeps the joints you're loading honest.",
    icon: <GrYoga />,
  },
  {
    id: "02",
    title: "Strength & Muscle",
    desc: "Barbell-first programming, progressive load, six-week blocks.",
    icon: <FaDumbbell />,
  },
  {
    id: "03",
    title: "Conditioning",
    desc: "Short, brutal, and over before you can talk yourself out of it.",
    icon: <GiGymBag />,
  },
];

const Equipments = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">What we run on the floor</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.95]">
              Three Ways
              <br />
              To Get Worked
            </h2>
          </div>
          <p className="text-steel max-w-[340px]">
            Pick one or stack all three — most members rotate through every
            block across a training cycle.
          </p>
        </div>

        <div className="rule">
          {ProgramData.map((item, i) => (
            <motion.div
              key={item.id}
              variants={SlideUp(i * 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_3rem_1fr] items-center gap-4 md:gap-8 py-8 border-b border-chalk/15 hover:bg-ironsoft transition-colors duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
            >
              <span className="font-mono text-steel text-sm md:text-base order-1">
                {item.id}
              </span>
              <div className="order-2 md:order-3">
                <p className="font-display uppercase text-2xl md:text-3xl tracking-tight">
                  {item.title}
                </p>
                <p className="text-steel mt-1 max-w-[480px]">{item.desc}</p>
              </div>
              <span className="text-3xl text-lime order-3 md:order-2">
                {item.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipments;