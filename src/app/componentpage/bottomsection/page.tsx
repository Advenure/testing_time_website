import Image from "next/image";

export default function BottomSection() {
  return (
    <div className="container mx-auto px-4 mt2">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-6">
        {/* Text Section */}
        <div className="text-center lg:text-left p-4 sm:p-12">
          <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            From a studio in London to a global brand with
          </h2>
          <p className="text-gray-800 mt-6 text-base leading-relaxed sm:text-lg">
            When we started Avion, the idea was simple: make high-quality furniture affordable and available for the mass market. Handmade,
          </p>
          <p className="text-gray-800 mt-6 text-base leading-relaxed sm:text-lg">
            breathe and design, so our Chelsea boutique has become a hotbed for the London interior design community.
          </p>
          <button
            type="button"
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-transform hover:-translate-y-2 border-2 border-gray-800 text-gray-800 font-bold text-sm sm:text-base rounded-md px-6 py-2.5 bg-[#7372a5]"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center lg:h-[480px] sm:h-[400px]">
          <Image
            className="w-full h-full object-cover"
            src={"/Image (5).png"}
            width={720}
            height={603}
            alt="High-quality handmade furniture"
            priority
          />
        </div>
      </div>
    </div>
  );
}
