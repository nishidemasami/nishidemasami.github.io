import React from "react";
import Helmet from "react-helmet";
import type Node from "react";
import { useSiteMetadata } from "../../hooks";
import { layout } from "./Layout.module.scss";
import Background from "./Background";

type Props = {
  children: Node.ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
};

function Layout({
  children,
  title,
  description,
  socialImage = "",
}: Props): JSX.Element {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={title} property="og:site_name" />
        <meta content={metaImageUrl} property="og:image" />
        <meta content="summary" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={metaImageUrl} name="twitter:image" />
        <script
          async
          charSet="utf-8"
          src="https://b.st-hatena.com/js/bookmark_button.js"
          type="text/javascript"
        />
      </Helmet>
      <div className={layout}>{children}</div>
      <Background />
    </>
  );
}

export default Layout;
