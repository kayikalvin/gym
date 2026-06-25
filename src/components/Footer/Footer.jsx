import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-ironsoft border-t border-chalk/15">
      <div className="container py-20">
        <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] mb-14">
          See You On
          <br />
          <span className="text-lime">The Floor.</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10 pt-10 border-t border-chalk/15">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 font-display text-xl uppercase">
              <FaDumbbell className="text-lime" />
              <span>Coders</span>
              <span className="text-lime">Gym</span>
            </div>
            <p className="text-steel text-sm max-w-[260px]">
              A members-only strength and conditioning floor in Nairobi.
              Open 4:55am to midnight, every day.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Location"
                className="text-chalk/70 hover:text-lime transition-colors"
              >
                <HiLocationMarker className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-chalk/70 hover:text-lime transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-chalk/70 hover:text-lime transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-chalk/70 hover:text-lime transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-steel mb-5">
              Gym
            </p>
            <ul className="flex flex-col gap-3 text-chalk/85">
              <li>
                <a href="#home" className="hover:text-lime transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#trainer"
                  className="hover:text-lime transition-colors"
                >
                  Trainers
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="hover:text-lime transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-lime transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-steel mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-chalk/85">
              <li>
                <a href="#" className="hover:text-lime transition-colors">
                  Our coaches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition-colors">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-steel mb-5">
              Visit
            </p>
            <ul className="flex flex-col gap-3 text-chalk/85 text-sm">
              <li>Ngong Road, Nairobi</li>
              <li>+254 700 000 000</li>
              <li>train@codersgym.co.ke</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 text-xs text-steel pt-10 mt-6 border-t border-chalk/15">
          <p>© 2026 Coders Gym. All rights reserved.</p>
          <p>Built on iron, not templates.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;