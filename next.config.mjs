
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: '**.sanity.io',  // This works for any subdomain of "sanity.io"
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
       
        hostname: 'cdn.sanity.io',  // This works for any subdomain of "sanity.io"
      },
    ],
  },
};

export default nextConfig;

  


// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: '**.sanity.io',  // This works for any subdomain of "sanity.io"
//         },
//       ],
//     },
//     experimental: {
//       serverActions: false,  // Disable server actions if they are causing issues
//     },
//   };
  
//   export default nextConfig;
  


  
