import type React from "react";

export type RenderCallback = {
  render: (data: any) => React.ReactNode;
};

export type Entry = {
  getIn: (data: string[]) => string;
};

export type WidgetFor = (data: string) => string;

export type PageContext = {
  tag: string;
  category: string;
  currentPage: number;
  prevPagePath: string;
  nextPagePath: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type Node = {
  frontmatter: {
    slug: string;
    date: string;
    description?: string;
    category?: string;
    tags?: string[];
    title: string;
    socialImage?: string;
  };
  body: string;
  id: string;
};

export type Edge = {
  node: Node;
};

export type Edges = Array<Edge>;

export type allMdx = {
  allMdx: {
    edges: Edges;
  };
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
};

export type mdx = Node;
