/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "links.papareact.com",
            port: "",
            pathname: "/*"
            },
            {
            protocol: "https",
            hostname: "image.tmdb.org",
            port: "",
            pathname: "/*"
            },

        ],
    }
}

module.exports = nextConfig
