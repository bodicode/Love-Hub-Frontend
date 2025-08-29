"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12 mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">LoveHub.club</h2>
          <p className="text-sm mb-4">
            Ngôi nhà riêng tư lưu giữ yêu thương, nơi hai bạn có thể chia sẻ kỷ
            niệm, viết nhật ký và cùng nhau tận hưởng những hoạt động ngọt ngào.
            💖
          </p>
          <div className="flex space-x-4 text-lg">
            {[FaFacebookF, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:text-pink-500"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Kỷ niệm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Nhật ký
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Trò chơi
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-white font-semibold mb-4">Công ty</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Điều khoản
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Hoàn tiền
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
          <p className="text-sm">📞 Điện thoại: +84 912345678</p>
          <p className="text-sm">
            ✉️ Email:{" "}
            <a
              href="mailto:support@lovehub.com"
              className="hover:text-pink-500"
            >
              support@lovehub.com
            </a>
          </p>
          <p className="text-sm mt-2">
            📍 Địa chỉ: 123 Phố Tình Yêu, Thành phố Couple
          </p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Bản quyền © {new Date().getFullYear()} LoveHub. Mọi quyền được bảo lưu.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
