'use client';

import Link from "next/link";
export default function Navbarthree() {
  return (
    <ul className="hidden md:flex lg:items-center lg:justify-center px-10 py-3">
      {/* Logo (visible only on smaller screens) */}
      <li className="mb-6 hidden max-md:flex">
        {/* Add logo content here */}
      </li>
      {/* Navigation Links */}
      {[
        { label: 'Plant pots', href: '/', isActive: true },
        { label: 'Ceramics', href: '/', isActive: false },
        { label: 'Tables', href: '/', isActive: false },
        { label: 'Chairs', href: '/', isActive: false },
        { label: 'Crockery', href: '/', isActive: false },
        { label: 'Tableware', href: '/', isActive: false },
        { label: 'Cutlery', href: '/componentone/curtlery', isActive: true },
      ].map(({ label, href, isActive }) => (
        <li key={label} className="max-lg:border-b max-lg:py-3 px-3">
          <Link
            href={href}
            className={`${
              isActive ? 'text-gray-700 font-bold' : 'text-gray-700'
            } hover:underline text-[15px] font-medium block`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
