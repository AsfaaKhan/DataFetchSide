
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'fakestoreapi.com',
                port : '',
                pathname : '/img/**',
            },
        ],
    },
};