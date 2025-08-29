"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Huấn luyện viên Lãng mạn",
    role: "Giúp bạn lên kế hoạch cho những bất ngờ ngọt ngào",
    img: "/images/ava.jpg",
  },
  {
    name: "Người giữ kỷ niệm",
    role: "Lưu giữ nhật ký và những cột mốc đáng nhớ",
    img: "/images/ava.jpg",
  },
  {
    name: "Người bạn Vui nhộn",
    role: "Mang đến trò chơi và thử thách thú vị",
    img: "/images/ava.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Gặp gỡ <span className="text-pink-500">Love-Hub</span> của bạn
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mt-2 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
