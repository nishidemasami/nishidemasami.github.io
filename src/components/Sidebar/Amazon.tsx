import React, { useEffect } from "react";

function Amazon() {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.text =
  //       'amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="nishidemasami-22"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="JP"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF";';

  //     const script2 = document.createElement("script");
  //     script2.src =
  //       "//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=JP";
  //     script2.async = false;

  //     const amazonAdd = document.querySelector(
  //       "#amzn_assoc_ad_div_assoc_banner_placement_default_0"
  //     );
  //     if (amazonAdd) {
  //       amazonAdd.appendChild(script);
  //       amazonAdd.appendChild(script2);
  //     }
  //   }, []);
  return (
    <>
      <div id="amzn_assoc_ad_div_assoc_banner_placement_default_0" />
      <div id="amzn_assoc_ad_div_adunit_0" />
    </>
  );
}

export default Amazon;
