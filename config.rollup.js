import nodeResolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"

export default ["namespace", "selective"].map(scenario => ({
  input: `source/${scenario}-imports/index.ts`,
  output: {
    file: `./build/rollup/${scenario}-imports/index.js`,
    format: "iife",
  },
  plugins: [typescript(), nodeResolve()],
}))
