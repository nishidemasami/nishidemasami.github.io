import { GatsbyConfig } from "gatsby";
import sass from "sass";
import siteConfig from "../config.json";
import postCssPlugins from "./postcss-config";

const generateConfig = ({
  projectRoot,
}: {
  projectRoot: string;
}): GatsbyConfig => ({
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${projectRoot}/static`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${projectRoot}/static/media`,
        name: "media",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${projectRoot}/content`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "css",
        path: `${projectRoot}/static/css`,
      },
    },
    {
      resolve: "gatsby-plugin-feed-mdx",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.site_url + edge.node.frontmatter.slug,
                guid: site.siteMetadata.site_url + edge.node.frontmatter.slug,
                custom_elements: [{ "content:encoded": edge.node.body }],
              })),
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { eq: false } } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        slug
                        title
                        date
                        template
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: siteConfig.title,
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms-paths",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: { fileName: "types/graphql-types.d.ts" },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${projectRoot}/src/cms/index.js`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    // // "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     query: `
    //       {
    //         allSitePage(
    //           filter: {
    //             path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
    //           }
    //         ) {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     output: "/sitemap.xml",
    //     filterPages: () => true,
    //     resolveSiteUrl: () => siteConfig.url,
    //     resolvePages: ({ allSitePage }) => allSitePage.edges,
    //     serialize: (data) => {
    //       console.log(data);
    //       return data.edges.map((edge) => ({
    //         url: siteConfig.url + edge.node.path,
    //         changefreq: "daily",
    //         priority: 0.7,
    //       }));
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     output: "/some-other-sitemap.xml",
    //     // Exclude specific pages or groups of pages using glob parameters
    //     // See: https://github.com/isaacs/minimatch
    //     // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    //     exclude: ["/category/*", "/path/to/page"],
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }

    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //   }`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: siteConfig.url,
    //     sitemap: `${siteConfig.url}sitemap.xml`,
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: siteConfig.title,
    //     short_name: siteConfig.title,
    //     start_url: "/",
    //     background_color: "#FFF",
    //     theme_color: "#F7A046",
    //     display: "standalone",
    //     icon: "static/photo.jpg",
    //   },
    // },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|[^:]static\/)/,
              handler: "CacheFirst",
            },
            {
              // page-data.json files, static query results and app-data.json
              // are not content hashed
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: "StaleWhileRevalidate",
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: "StaleWhileRevalidate",
            },
            {
              // Google Fonts CSS (doesn't end in .css so we need to specify it)
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: "StaleWhileRevalidate",
            },
          ],
        },
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: sass,
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1,
      },
    },
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-material-ui",
  ],
});

export default generateConfig;
