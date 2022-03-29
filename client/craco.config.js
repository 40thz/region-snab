const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@styles": path.resolve(__dirname, "src/redux/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
};
