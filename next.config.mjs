import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n/request.js');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.aunkarvastu.com', 'www.kashiarchan.com', 'imgs.search.brave.com', 'images.unsplash.com', 'kashiarchan.com'],
  },
};

export default withNextIntl(nextConfig);
