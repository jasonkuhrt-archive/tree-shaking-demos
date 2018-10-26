const Bundler = require("parcel-bundler")

const files = ["namespace", "selective"].map(
  scenario => `./source/${scenario}-imports/index.ts`,
)

const options = {
  outDir: "./build/parcel",
  minify: true,
  watch: false,
  sourceMaps: false,
  scopeHoist: true,
}

const bundler = new Bundler(files, options)

bundler.bundle()
