import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion, AnimatePresence } from "framer-motion";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <section id="gear" className="py-24 md:py-32 border-t border-chalk/15">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="eyebrow mb-4">In the gear room</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.95]">
              What You'll
              <br />
              Actually Use
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs uppercase tracking-widest py-2.5 px-5 border transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-lime text-iron border-lime"
                    : "border-chalk/30 text-steel hover:border-chalk/60 hover:text-chalk"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-chalk/15">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group border-r border-b border-chalk/15 p-7 hover:bg-ironsoft transition-colors duration-300"
              >
                <div className="aspect-[4/3] mb-5 overflow-hidden bg-ironsoft flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-lime mb-2">
                  {card.category}
                </p>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-semibold leading-snug">
                    {card.title}
                  </p>
                  <p className="font-mono text-sm text-steel shrink-0">
                    {card.price}
                  </p>
                </div>
                <p className="text-steel text-sm mt-2">{card.info}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TabComp;