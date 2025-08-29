"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl text-gray-800">
          LoveHub.<span className="text-pink-500">club</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="#" className="hover:text-pink-500 transition">
            Trang chủ
          </Link>
          <Link href="#" className="hover:text-pink-500 transition">
            Nhật ký
          </Link>
          <Link href="#" className="hover:text-pink-500 transition">
            Albums
          </Link>
          <Link href="#" className="hover:text-pink-500 transition">
            Liên hệ
          </Link>
          <Link href="#" className="hover:text-pink-500 transition">
            Về chúng tôi
          </Link>
        </nav>

        <button className="hidden md:block px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition">
          Đăng nhập
        </button>
      </div>
    </header>
  );
};

export default Header;
