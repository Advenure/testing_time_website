import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

type Idata = {
  name: string;
  price: number;
  imageUrl: string;
  _id: string;
  category: string;
  description: string;
};

export default async function API_product_two() {
  let apifetch: Idata[] = [];

  try {
    apifetch = await client.fetch(
      `*[_type == "product"] {
        name,
        "imageUrl": image.asset->url, 
        price,
        _id
      }`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p className="text-center text-red-500">Failed to load products.</p>;
  }

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-sans w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-8">
        {apifetch.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-52">
              <Link href={`/product/${post._id}`}>
                <Image
                  src={post.imageUrl || "/default-image.jpg"}
                  alt={post.name || "Product Image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Link>
            </div>

            <div className="p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-sm font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                {post.name}
              </h3>
              <p className="text-lg font-semibold text-gray-900">${post.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
