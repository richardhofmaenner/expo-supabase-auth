module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/assets": "./assets",
            "@/components": "./src/components",
            "@/nav": "./src/nav",
            "@/providers": "./src/providers",
            "@/screens": "./src/screens",
            "@/types": "./src/types",
            "@/utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
