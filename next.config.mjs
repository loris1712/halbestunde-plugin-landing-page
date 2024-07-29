// next.config.js
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Aggiungi supporto per i file SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    // Altre configurazioni Webpack possono essere aggiunte qui

    return config;
  },
  images: {
    domains: ['example.com'], // Aggiungi i domini delle immagini
  },
};

export default nextConfig;

