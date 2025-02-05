import { Facebook, Github, Twitter, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] py-12 px-10">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Use Cases Section */}
        <div>
          <h4 className="text-white text-lg mb-6">Use Cases</h4>
          <ul className="space-y-4">
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Web Designers</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Marketers</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Business</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Themes</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Website Builder</Link></li>
          </ul>
        </div>

        {/* Product Section */}
        <div>
          <h4 className="text-white text-lg mb-6">Product</h4>
          <ul className="space-y-4">
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Landing Page</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Popup Builder</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Web Design</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Content</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-white text-lg mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Academy</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Blog</Link></li>
            <li><Link href={""} className="text-gray-300 hover:text-white text-[15px]">Developer</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="lg:mt-20">
          <div className="flex bg-[#322d4d] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-transparent text-white outline-none text-[15px]"
            />
            <button className="px-4 py-2 bg-indigo-500 text-white text-[15px] hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-400" />

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-white">
        <p className="text-[15px]">© Kamran Tasleem Ahmed. All rights reserved.</p>
        <div className="flex gap-4 text-2xl mt-5">
          <Link href="#"><Facebook className="hover:text-blue-500 transition" /></Link>
          <Link href="#"><Github className="hover:text-gray-400 transition" /></Link>
          <Link href="#"><MessageCircle className="hover:text-green-500 transition" /></Link> {/* WhatsApp Icon */}
          <Link href="#"><Twitter className="hover:text-blue-400 transition" /></Link>
          <Link href="#"><Linkedin className="hover:text-blue-600 transition" /></Link>
        </div>
      </div>
    </footer>
  );
}
