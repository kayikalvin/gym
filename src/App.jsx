import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "Recovery Isn't Optional",
  subtitle:
    "We program rest the same way we program load. Mobility blocks, sleep tracking, and coaches who'll bench you for a week if your numbers say you need it.",
};

const Banner2Data = {
  image: Img2,
  title: "Six-Week Blocks, Not Guesswork",
  subtitle:
    "Every cycle starts with a baseline test and ends with a re-test. You'll see the exact numbers move — not a vague sense that things are better.",
  reverse: true,
};

const App = () => {
  return (
    <div className="overflow-x-hidden bg-iron text-chalk">
      <Navbar />
      <Hero />
      <Equipments />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;