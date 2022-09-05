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

  const script = document.createElement("script");
  script.text =
    'amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="nishidemasami-22"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="JP"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF";';

  const script2 = document.createElement("script");
  script2.src =
    "//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=JP";
  script2.async = false;

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
        {/* {script}
        {script2} */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="nishidemasami-22"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="JP"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF";',
          }}
        />
        <script
          async={false}
          src="//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=JP"
        />
      </Helmet>
      <div className={layout}>{children}</div>
      <Background />
    </>
  );
}

export default Layout;
