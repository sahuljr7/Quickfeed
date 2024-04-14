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
