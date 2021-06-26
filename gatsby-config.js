module.exports = {
  siteMetadata: {
    title: "Teddy Borgman's Portfolio",
    siteUrl: "http://localhost:9000/"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `/${__dirname}/src/assets/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/assets/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `/${__dirname}/src/assets/images/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};
