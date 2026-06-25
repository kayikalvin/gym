import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";

const ResponsiveMenu = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-iron md:hidden"
        >
          <div className="container flex flex-col h-full pt-28 pb-10">
            <ul className="flex flex-col gap-1 font-display text-4xl uppercase">
              {NavbarMenu.map((item, i) => (
                <li key={item.id} className="border-b border-chalk/15">
                  <a
                    href={`#${item.link}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-5 hover:text-lime transition-colors"
                  >
                    <span>{item.title}</span>
                    <span className="font-mono text-sm text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              onClick={onClose}
              className="primary-btn mt-auto justify-center"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;