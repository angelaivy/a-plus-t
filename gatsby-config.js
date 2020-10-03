module.exports = {
  siteMetadata: {
    title: `A + T Wedding`,
    description: `Angela Ivy and Terry Wilson are getting married on June 12, 2021, where the desert meets the trees. Wenas, Washington.`,
    author: `@angelazer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a-plus-t-wedding`,
        short_name: `wedding`,
        start_url: `/`,
        background_color: `#05878a`,
        theme_color: `#05878a`,
        display: `minimal-ui`,
        icon: `src/images/heartInfinity.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
