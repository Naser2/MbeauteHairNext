// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        { protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '**',
        },
        { protocol: 'https',
        hostname: 'https://eadem.co',
        pathname: '**'},
        { protocol: 'https',
        hostname: 'https://static.wixstatic.com',
        pathname: '**'},

        { protocol: 'https',
        hostname: 'https://vercel.com',
        pathname: '**'}
      ]
    },
  };
  
  export default nextConfig;
  