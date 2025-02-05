

"use client"

import { Menu, Search, ShoppingCart, User, Home, Info, Contact, List, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

// Define the type for the product data
type Product = {
  _id: string;
  name: string;
  price: number;
};

export default function Navbartwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Typing the state to expect an array of Product objects

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchData = async () => {
        const results = await client.fetch(
          `*[_type == "product" && name match "${searchQuery}*"]{name, price, _id}`
        );
        setSearchResults(results);
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <nav className="text-black border border-gray-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-2xl">Avion</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/components-product/product_two" className="text-sm hover:underline">Listing</Link>
          </div>

          {/* Search & Icons */}
          <div className="flex gap-4 items-center relative">
            <div className="relative">
              {isSearchOpen && (
                <div className="absolute top-10 left-0 md:left-auto md:right-0 w-56 md:w-72 bg-white shadow-lg rounded-md p-2 flex flex-col z-50">
                  <div className="flex items-center border-b pb-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 border-none outline-none"
                      autoFocus
                    />
                    <X className="cursor-pointer ml-2" onClick={() => setIsSearchOpen(false)} />
                  </div>
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-40 overflow-y-auto">
                      {searchResults.map((result) => (
                        <Link
                          key={result._id}
                          href={`/product/${result._id}`} // Dynamic link to the product detail page
                          className="block p-2 hover:bg-gray-200"
                        >
                          {result.name} - ${result.price}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <Search className="cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />
            </div>
            <Link href="/shopping-cart">
              <ShoppingCart />
            </Link>
            <Link href="/profile">
              <User />
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 text-black p-4 space-y-2 absolute w-full left-0 top-16 z-50 flex flex-col">
          <Link href="/" className="py-2 border-b flex items-center"><Home className='mr-2' /> Home</Link>
          <Link href="/about" className="py-2 border-b flex items-center"><Info className='mr-2' /> About</Link>
          <Link href="/contact" className="py-2 border-b flex items-center"><Contact className='mr-2' /> Contact</Link>
          <Link href="/components-product/product_two" className="py-2 border-b flex items-center"><List className='mr-2' /> Listing</Link>
          <Link href="/shopping-cart" className="py-2 border-b flex items-center"><ShoppingCart className='mr-2' /> Cart</Link>
          <Link href="/profile" className="py-2 flex items-center"><User className='mr-2' /> Profile</Link>
        </div>
      )}
    </nav>
  );
}
