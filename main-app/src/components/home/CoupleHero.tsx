"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CoupleHero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12 overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <Image
          src="/images/couple-hero.jpg"
          alt="Couple"
          width={500}
          height={400}
          className="mx-auto rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hãy luôn kết nối <br /> Chúng tôi sẽ giữ{" "}
          <span className="text-pink-500">Kỷ niệm tình yêu</span> của bạn an
          toàn 💖
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Tải lên những bức ảnh, viết nhật ký, kỷ niệm các cột mốc và cùng nhau
          tận hưởng trò chơi vui vẻ — tất cả trong một không gian riêng tư chỉ
          dành cho hai bạn.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold shadow hover:opacity-90 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Tạo kỷ niệm của bạn
        </motion.button>
      </div>
    </section>
  );
};

export default CoupleHero;
