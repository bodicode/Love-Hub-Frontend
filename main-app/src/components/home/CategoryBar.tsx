"use client";
import {
  FaHeart,
  FaBook,
  FaCamera,
  FaTasks,
  FaGamepad,
  FaBullseye,
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  { id: 1, label: "Kỷ niệm", icon: <FaHeart />, active: true },
  { id: 2, label: "Nhật ký", icon: <FaBook /> },
  { id: 3, label: "Album", icon: <FaCamera /> },
  { id: 4, label: "Các hoạt động", icon: <FaTasks /> },
  { id: 5, label: "Trò chơi", icon: <FaGamepad /> },
  { id: 6, label: "Mục tiêu", icon: <FaBullseye /> },
];

const CategoryBar = () => {
  return (
    <div className="flex items-center justify-center gap-6 my-12 flex-wrap">
      {categories.map((c, i) => (
        <motion.div
          key={c.id}
          className={`flex flex-col items-center p-4 rounded-2xl shadow-md cursor-pointer transition ${
            c.active
              ? "bg-gradient-to-b from-pink-500 to-pink-400 text-white"
              : "bg-white text-gray-700 hover:bg-pink-100"
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(236, 72, 153, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-2xl">{c.icon}</div>
          <span className="mt-2 font-medium">{c.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryBar;
