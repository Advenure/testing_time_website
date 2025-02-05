

export default function Cutlerytwo() {
    return (
      <div
        className="py-16 px-6 font-sans bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Image (4).png')", // Ensure image path is correct
        }}
      >
        <div className="max-w-5xl mx-auto text-center  p-6 sm:p-8 md:p-10 rounded-md">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
            Join the club and get the benefits
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
            Sign up for our newsletter and receive exclusive offers on new ranges, <br className="hidden sm:block" />
            sales, pop-up stores, and more.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center mt-5 font-bold text-1xl ">
            <li className="flex gap-2"> <input type="checkbox"  className="w-6 h-6 items-center"/> Exclusive offers </li>
            <li className="flex gap-2"> <input type="checkbox"  className="w-6 h-6 items-center"/> Free events </li>
            <li className="flex gap-2"> <input type="checkbox"  className="w-6 h-6 items-center"/> Large discounts </li>

          </ul>
          <div className="mt-8 sm:mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            <div className="flex-grow w-full sm:w-auto">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 sm:h-10 bg-gray-50 py-2 px-4 text-gray-800 focus:outline-none focus:ring focus:ring-indigo-500 rounded-md sm:rounded-none sm:rounded-l-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2A254B] text-white text-base py-2 px-6 w-full sm:w-auto rounded-md sm:rounded-none sm:rounded-r-md hover:bg-[#3b3560] transition"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
  