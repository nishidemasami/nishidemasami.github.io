import React from "react";
import Helmet from "react-helmet";
import type Node from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";
import Background from "./Background";

type Props = {
  children: Node.ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
};

const Layout = ({ children, title, description, socialImage = "" }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <script
          type="text/javascript"
          src="https://b.st-hatena.com/js/bookmark_button.js"
          charSet="utf-8"
          async
        />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Helmet>
      <div className={styles.layout}>{children}</div>
      <Background />
    </React.Fragment>
  );
};

export default Layout;
