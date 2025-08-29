"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

const specials = [
  {
    id: 1,
    title: "First Date 💖",
    img: "/images/couple.jpg",
    date: "Feb 14, 2024",
    rating: 5,
  },
  {
    id: 2,
    title: "Trip to Da Lat 🌲",
    img: "/images/forest.jpg",
    date: "Mar 20, 2024",
    rating: 4.8,
  },
  {
    id: 3,
    title: "200 Days Together 🏆",
    img: "/images/streak.jpg",
    date: "Jul 10, 2024",
    rating: 5,
  },
  {
    id: 4,
    title: "Funny Quiz 🎮",
    img: "/images/game.jpg",
    date: "Aug 5, 2024",
    rating: 4.9,
  },
];

const SpecialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-pink-50">
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Kỉ Niệm <span className="text-pink-500">Đặc Biệt</span>
        </h2>
        <Slider {...settings}>
          {specials.map((s, i) => (
            <motion.div
              key={s.id}
              className="px-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-60"
                  />
                </motion.div>

                <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                  {s.date}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-500">
                    ⭐ {s.rating.toFixed(1)} / 5.0
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialsSlider;
