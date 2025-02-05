import Image from "next/image";

export default function BottomSectiontwo() {
  return (
    <div className="container mx-auto  mt-2  bg-[#2A254B]  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg: gap-8 mb-6">
        {/* Text Section */}
        <div className="text-centerlg:text-left p-4  sm:p-12">
           
          <h2 className="text-gray-200 text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold">
          It started with a small idea
          </h2>
          <p className="text-gray-200 mt-6 text-base leading-relaxed sm:text-lg">
          A global brand with local beginnings, our story begain in a small studio in South London in early 2014
          </p>
         
          <button
            type="button"
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-transform hover:-translate-y-2 border-2 border-gray-800 text-gray-800 font-bold text-sm sm:text-base rounded-md px-6 py-2.5 bg-[#7372a5]"
          >
           View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center lg:h-[480px] sm:h-[400px]">
          <Image
            className="w-full h-full object-cover"
            src={"/Image Block (1).png"}
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
