import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-30 bg-iron/90 backdrop-blur-sm border-b border-chalk/15"
      >
        <div className="container flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center gap-2 font-display text-2xl tracking-tight uppercase">
            <FaDumbbell className="text-lime" />
            <span>Coders</span>
            <span className="text-lime">Gym</span>
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-steel">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.link}`}
                    className="inline-block py-1 hover:text-lime transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="hidden sm:inline-flex text-xl text-chalk hover:text-lime transition-colors duration-200"
            >
              <CiSearch />
            </button>
            <a
              href="#pricing"
              className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest border border-chalk/30 px-5 py-2.5 hover:border-lime hover:text-lime transition-colors duration-200"
            >
              Join Now
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-3xl text-chalk"
              onClick={() => setOpen(!open)}
            >
              {open ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;