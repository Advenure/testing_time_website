import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-white flex items-center bg-[#2A254B] px-5">
      <div className="  h-[490px] mx-auto md:flex md:justify-between items-center">
        {/* Text Content */}
        <div className="md:w-2/3 max-lg:text-center">
          <h2 className="text-2xl lg:text-3xl font-bold leading-relaxed ">
            The furniture brand for the future, <br /> with timeless designs
          </h2>
          <button
            type="button"
            aria-label="Get Started"
            className="hidden md:inline-block hover:-translate-y-2 transition-all border-2 border-gray-800 font-bold text-sm rounded-md px-6 py-2.5 mt-4 bg-gray-600"
          >
            Get Started
          </button>
          <p className="leading-relaxed text-lg mt-20">
            When we started Avion, the idea was simple: make high-quality
            furniture affordable and available for the mass market. Handmade
            with care, each piece is crafted to last a lifetime.
          </p>
          <button
            type="button"
            aria-label="Get Started"
            className="block md:hidden hover:-translate-y-2 transition-all border-2 border-gray-800 font-bold text-sm rounded-md w-full px-3 py-2.5 mt-4 bg-gray-600"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex  items-center justify-center h-[320px] w-[420px] pl-10">
          <Image
            src="/Parent (3).png"
            alt="Furniture brand showcase"
            height={400}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}