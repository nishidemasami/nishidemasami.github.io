"use strict";

const path = require("path");
const _ = require("lodash");
const createCategoriesPages = require("./pagination/create-categories-pages.js");
const createTagsPages = require("./pagination/create-tags-pages.js");
const createPostsPages = require("./pagination/create-posts-pages.js");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.tsx"),
  });

  // Tags list
  createPage({
    path: "/tags",
    component: path.resolve("./src/templates/tags-list-template.tsx"),
  });

  // Categories list
  createPage({
    path: "/categories",
    component: path.resolve("./src/templates/categories-list-template.tsx"),
  });

  // Pages from markdown
  const PagesResult = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { template: { eq: "page" }, draft: { eq: false } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
              date
            }
          }
        }
      }
    }
  `);

  const { edges: pages } = PagesResult.data.allMdx;
  console.log(pages);
  // pages.forEach((page) => {
  _.each(pages, (page) => {
    createPage({
      path: page.node.frontmatter.slug,
      component: path.resolve("./src/templates/page-template.tsx"),
      context: {
        slug: page.node.frontmatter.slug,
      },
    });
  });

  // Posts from markdown
  const PostsResult = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { eq: false } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
              date
            }
          }
          next {
            frontmatter {
              title
              slug
              date
            }
          }
          previous {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = PostsResult.data.allMdx;
  console.log(posts);
  // posts.forEach((post) => {
  _.each(posts, (post) => {
    const pagePath = post.node.frontmatter.slug;

    createPage({
      path: pagePath,
      component: path.resolve("./src/templates/post-template.tsx"),
      context: {
        slug: post.node.frontmatter.slug,
        next: post.next,
        previous: post.previous,
      },
    });
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};

module.exports = createPages;
