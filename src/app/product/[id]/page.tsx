
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import API_product_two from "@/app/components_API/product_two/page";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const id = params.id; // ✅ No need to await here, `params.id` is already a string

  const query = `*[_type == "product" && _id == $id][0]{
    name,
    price,
    description,
    "category": category->title,
    "id": _id,
    image,
    dimensions
  }`;

  let product;
  try {
    product = await client.fetch(query, { id });
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <p className="text-gray-500">There was an error fetching the product data.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <p className="text-gray-500">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="grid items-start grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                height={400}
                width={400}
                className="w-full h-[70vh] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
            <div className="flex items-center space-x-4 mt-6">
              <p className="text-4xl font-semibold text-gray-900">${product.price}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Product Description</h3>
              <p className="text-sm text-gray-500 mt-4">{product.description}</p>
            </div>

            {/* Dynamic Dimensions */}
            <h1 className="text-xl">Dimensions</h1>
            <div className="flex w-full">
              <ul className="space-y-2 text-sm text-gray-600 flex gap-10 items-center">
                <button className="bg-slate-200 px-4 py-2">
                  <h3 className="text-lg text-gray-800">Height</h3>
                  <h3 className="font-medium text-lg text-gray-600">{product.dimensions?.height || "N/A"} </h3>
                </button>
                <button className="bg-slate-200 px-4 py-2">
                  <h3 className="text-lg text-gray-800">Width</h3>
                  <h3 className="font-medium text-lg text-gray-600">{product.dimensions?.width || "N/A"} </h3>
                </button>
                <button className="bg-slate-200 px-4 py-2">
                  <h3 className="text-lg text-gray-800">Depth</h3>
                  <h3 className="font-medium text-lg text-gray-600">{product.dimensions?.depth || "N/A"} </h3>
                </button>
                {/* Category Button */}
                <button className="bg-blue-200 px-4 py-2">
                  <h3 className="text-lg text-gray-800">Category</h3>
                  <h3 className="font-medium text-lg text-gray-600">{product.category}</h3>
                </button>
              </ul>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex items-center space-x-4">
              <h1>Quantity:</h1>
              <button className="bg-slate-200 px-6 py-2 border border-gray-800 text-center">1</button>
            </div>

            <div className="mt-6 lg:flex gap-4">
              <button
                type="button"
                className="w-full px-4 py-3 border bg-[#2A254B] text-white text-sm font-semibold rounded-md transition duration-200"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full px-4 py-3 border border-gray-800 text-gray-800 bg-white text-sm font-semibold rounded-md transition duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-3xl font-bold px-2">More Products</h1>
      <API_product_two/>
    </div>
  );
}
