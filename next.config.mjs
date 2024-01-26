/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "https://pokeapi.co/api/v2/pokemon-form/230/",
            }
        ],
    }
};

export default nextConfig;