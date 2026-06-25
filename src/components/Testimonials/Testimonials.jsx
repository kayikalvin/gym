import React from "react";
import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.16,1,0.3,1)",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, initialSlide: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 md:py-32 border-t border-chalk/15 testimonial-slider">
      <div className="container">
        <p className="eyebrow mb-4 text-center md:text-left">
          From the floor
        </p>
        <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.95] mb-14 text-center md:text-left">
          What Members Say
          <br />
          When We're Not Listening
        </h2>

        <Slider {...setting}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="px-3">
              <div className="flex flex-col gap-6 p-8 border border-chalk/15 h-full min-h-[280px]">
                <FaQuoteLeft className="text-lime text-2xl" />
                <p className="text-chalk/90 leading-relaxed flex-1">
                  {data.text}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-chalk/15">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-11 h-11 object-cover grayscale"
                  />
                  <div>
                    <p className="font-semibold leading-tight">{data.name}</p>
                    <p className="text-steel text-xs font-mono uppercase tracking-wide">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;