const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      'TECH <span class="text-primary">GRY</span>',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/techgry1" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/pages/about',// add trailing slash if enabled above
      '/AWS',
      '/Java',
      '/DataStructures'
    ],
    collapsedNav: [
      '/AWS',
      '/Java'// add trailing slash if enabled above
    ],
    links: [{ text: 'Tweet Me', link: 'https://twitter.com/techgry1' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='/'>Home </a><div class='greenCircle'></div><a href='/pages/about'>About </a><!--<a href='http://www.vishnusunkari.com'>About Me</a>-->",
  },
  siteMetadata: {
    title: 'TechGry',
    description: 'Documentation built with mdx.  ',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'TechGry',
      short_name: 'TechGry',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      /*icons: [
        {
          src: 'pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],*/
    },
  },
};

module.exports = config;
