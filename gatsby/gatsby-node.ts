import { GatsbyNode } from "gatsby";
import createPages from "./create-pages";
import onCreateNode from "./on-create-node";

const gatsbyNode: GatsbyNode = {
  createPages,
  onCreateNode,
  onCreateWebpackConfig: ({ stage, getConfig, actions }) => {
    if (getConfig().mode === "production") {
      actions.setWebpackConfig({
        devtool: false,
      });
    }
    if (stage === "build-javascript") {
      const config = getConfig();
      const miniCssExtractPlugin = config.plugins.find(
        (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
      );
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true;
      }
      actions.replaceWebpackConfig(config);
    }
  },
};
export default gatsbyNode;
