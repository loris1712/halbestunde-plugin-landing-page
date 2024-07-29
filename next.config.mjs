// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Abilita il modo Strict di React per il controllo dei problemi
  reactStrictMode: true,

  // Configurazione per le immagini
  images: {
    // Definisce i domini da cui le immagini possono essere caricate
    domains: ['example.com'], // Sostituisci con i tuoi domini
  },

  // Configurazione per i percorsi delle pagine
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'], // Aggiungi estensioni di file delle pagine

  // Configurazione per la generazione di pagine statiche
  // Usa getStaticProps e getStaticPaths
  staticPageGeneration: {
    // Se è necessario, puoi aggiungere delle configurazioni specifiche
    // per la generazione delle pagine statiche
  },

  // Configurazione per il build-time environment
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://api.example.com', // Aggiungi le tue variabili d'ambiente
  },

  // Configurazione per i headers personalizzati
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'max-age=0, s-maxage=86400' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },

  // Configurazione per il redirect e il rewrite
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*', // Reindirizza richieste API a un altro endpoint
      },
    ];
  },

  // Configurazione per il Webpack
  webpack(config, { isServer }) {
    // Modifica la configurazione di Webpack qui se necessario
    if (!isServer) {
      config.node = {
        fs: 'empty', // Aggiungi configurazioni per node o polyfills se necessario
      };
    }
    return config;
  },

  // Abilita la compressione delle pagine
  compress: true,

  // Imposta la configurazione per i percorsi base
  basePath: '', // Aggiungi un percorso base se il sito è servito da una sottocartella
};

export default nextConfig;


