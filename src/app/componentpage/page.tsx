import Image from "next/image";

export default function HeroSectiontwo() {
  return (
    <div className="container mx-auto  mt-2   ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg: gap-8 mb-6">
         {/* Image Section */}
         <div className="flex items-center justify-center lg:w-fullsm:h-[400px]">
          <Image
            className="w-full h-full object-cover"
            src={"/Image (6).png"}
            width={720}
            height={603}
            alt="High-quality handmade furniture"
            priority
          />
        </div>
        {/* Text Section */}
        <div className="text-center lg:text-left  p-4  sm:p-12">
           
          <h2 className="text-gray-900 text-2xl sm:text-2xl md:text-1xl lg:text-1xl font-semibold">
          Our service isn’t just personal, it’s actually
          hyper personally exquisite
          </h2>
          <p className="text-gray-900 mt-6 text-base leading-relaxed sm:text-lg">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
          </p>
         
          <button
            type="button"
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-transform hover:-translate-y-2 border-2 border-gray-800 text-gray-800 font-bold text-sm sm:text-base rounded-md px-6 py-2.5 "
          >
           View collection
          </button>
        </div>

       
      </div>
    </div>
  );
}
