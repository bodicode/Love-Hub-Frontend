"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center px-8 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Đăng nhập vào <span className="text-pink-500">Love-Hub</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Chào mừng bạn quay lại 💖. Hãy tiếp tục lưu giữ kỷ niệm cùng nhau!
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-pink-500 hover:underline">
              Quên mật khẩu?
            </a>
            <a href="/auth/register" className="text-gray-500 hover:underline">
              Đăng ký tài khoản
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-center bg-pink-50 relative">
        <Image
          src="/images/login.jpg"
          alt="Couple Illustration"
          width={600}
          height={600}
          className="object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
