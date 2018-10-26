const webpack = require("webpack")
const path = require("path")

const entry = ["namespace", "selective"].reduce(
  (entries, scenario) =>
    Object.assign(entries, {
      [`${scenario}-imports`]: `./source/${scenario}-imports/index.ts`,
    }),
  {},
)

webpack(
  {
    entry,
    output: {
      path: `${path.resolve(__dirname)}/build/webpack`,
      filename: `[name]/index.js`,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
        },
      ],
    },
  },
  (err, stats) => {
    if (err) {
      console.error(err)
      return process.exit(1)
    }
    if (stats.hasErrors()) {
      stats.compilation.errors.forEach(err => console.error(err))
      return process.exit(1)
    }
  },
)
