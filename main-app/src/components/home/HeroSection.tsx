"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 bg-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-snug"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tình yêu <span className="text-pink-500">xinh đẹp</span> <br />
            của bạn được lưu giữ{" "}
            <span className="underline decoration-pink-400">ngay tại đây</span>!
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Lưu giữ kỷ niệm, chơi những trò chơi vui nhộn và cùng nhau tổ chức
            các cột mốc tình yêu đáng nhớ.
          </motion.p>

          <motion.button
            className="mt-8 px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow hover:bg-pink-600 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Bắt đầu ngay!
          </motion.button>
        </div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/images/hero.png"
              alt="Couple illustration"
              width={500}
              height={500}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
