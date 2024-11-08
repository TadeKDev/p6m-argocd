/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://supercog.ai),
  siteUrl: process.env.SITE_URL || 'https://supercog.ai',
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: [
    '/twitter-image.*',
    '/opengraph-image.*',
    '/icon.*',
    '/favicon.*',
    '/favicon.ico',
    '**/*.woff2', // Add this line to exclude all .woff2 files
  ],
  trailingSlash: true,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        disallow: ['/favicon.ico', '/*.woff2'], // Add /*.woff2 here
      },
    ],
  },
};
