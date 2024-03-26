/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"lcw.nyc3.cdn.digitaloceanspaces.com"
      }
    ]
  }
};

export default nextConfig;
