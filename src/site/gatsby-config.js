module.exports = {
  pathPrefix: `/pets-adoption-guide`,
  siteMetadata: {
    siteTitle: `PETs Adoption Guide`,
    defaultTitle: `PETs Adoption Guide`,
    siteTitleShort: `PETs Adoption Guide`,
    siteDescription: `PETs Adoption Guide`,
    siteUrl: `https://cdeiuk.github.io/pets-adoption-guide`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-tracking`,
      options: {
        debug: false,
        googleAnalytics: {
          trackingId: `UA-173229929-2`,
          autoStart: false,
          controlCookieName: `cdeiuk-analytics-enabled`,
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/content`,
        baseDir: `src/site`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PETs Adoption Guide`,
        short_name: `PETs Adoption Guide`,
        start_url: `/`,
        background_color: `#f0ede3`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        linkImagesToOriginal: false,
        backgroundColor: `transparent`,
        withWebp: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cdeiuk.github.io/pets-adoption-guide/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
