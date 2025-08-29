"use client";
import {
  FaHeart,
  FaBook,
  FaCamera,
  FaTasks,
  FaGamepad,
  FaBullseye,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FC } from "react";

type Category = {
  id: number;
  label: string;
  icon: IconType;
  active?: boolean;
};

const categories: Category[] = [
  { id: 1, label: "Kỷ niệm", icon: FaHeart, active: true },
  { id: 2, label: "Nhật ký", icon: FaBook },
  { id: 3, label: "Album", icon: FaCamera },
  { id: 4, label: "Các hoạt động", icon: FaTasks },
  { id: 5, label: "Trò chơi", icon: FaGamepad },
  { id: 6, label: "Mục tiêu", icon: FaBullseye },
];

const CategoryBar = () => {
  return (
    <div className="flex items-center justify-center gap-6 my-12 flex-wrap">
      {categories.map((c, i) => {
        // ép kiểu thành FunctionComponent chắc chắn render được
        const Icon: FC<{ className?: string }> = c.icon as FC<{
          className?: string;
        }>;
        return (
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
            <Icon className="text-2xl" /> {/* ✅ build sẽ pass */}
            <span className="mt-2 font-medium">{c.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryBar;
