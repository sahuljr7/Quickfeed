/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'QuickFeed',
  author: 'Sahul Kumar Parida',
  headerTitle: 'QuickFeed',
  description: 'Stay informed in a flash with QuickFeed, your shortcut to breaking news.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://quickfeed.vercel.app/',
  siteRepo: 'https://github.com/sahuljr7/QuickFeed',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sahulkumarparida@gmail.com',
  github: 'https://github.com/sahuljr7',
  twitter: 'https://twitter.com/sahul_22_jr',
  linkedin: 'https://linkedin.com/in/sahulkumarparida',
  instagram: 'https://instagram.com/sahulkumarparida',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata