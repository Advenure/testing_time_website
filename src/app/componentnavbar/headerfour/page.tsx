// app/components/Nabvarfour.jsx

export default function Nabvarfour() {
    return (
        <div className="relative w-full h-[200px]">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/Frame 143.png')" }}
            ></div>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Content */}
            <div className="relative flex items-center  h-full">
                <h1 className=" text-white justify-center  md:text-white text-4xl font-bold mt-10 px-4">All Products</h1>
            </div>
        </div>
    );
}
