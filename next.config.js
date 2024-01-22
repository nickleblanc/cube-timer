/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/timer',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
