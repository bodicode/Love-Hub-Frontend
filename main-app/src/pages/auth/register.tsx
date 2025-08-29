"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center bg-pink-50 relative">
        <Image
          src="/images/register.jpg"
          alt="Couple Register Illustration"
          width={600}
          height={600}
          className="object-contain rounded-xl shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center px-8 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Đăng ký <span className="text-pink-500">Love-Hub</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Tạo tài khoản để bắt đầu hành trình lưu giữ kỷ niệm cùng người thương
          💖
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="mt-1 w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="/auth/login" className="text-gray-500 hover:underline">
              Đã có tài khoản? Đăng nhập
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
