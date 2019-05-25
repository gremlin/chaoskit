module.exports = {
  siteMetadata: {
    title: 'ChaosKit',
    description:
      'A lightweight and modular front-end framework for developing fast and powerful web interfaces within Gremlin',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/BaseLayout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gremlin',
        short_name: 'Gremlin',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#23c386',
        display: 'minimal-ui',
        icon: './src/assets/media/favicon-base.png',
      },
    },
  ],
};
