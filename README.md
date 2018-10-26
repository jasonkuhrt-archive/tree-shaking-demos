# Tree Shaking Demos

This repository demos various scenarios of tree-shaking across the following bundlers:

- Webpack
- Parcel
- Rollup

#### Findings

- Rollup and Webpack can both tree-shake selective or namespaced imports
- Parcel tree-shaking did not appear to work (?)

#### TODO

- More advanced demos may reveal caveats/limits of import style. For example some discussions suggest that Rollup will apparently be unable to tree shake namespaced imports if the namespace object is reflected upon ([ref](https://gist.github.com/Rich-Harris/24a8ddd3947150aa8c15a9367faf1d62)).
- Its unlikely that Parcel tree-shaking, even if experiment, does not work on such simple demos. Is it configured incorrectly?

#### Quick Start

Demo results are committed to this repository in `./build` or you can run demos for yourself:

```
yarn build
```

#### Development

- Config files driving each bundler are at the root of the project.
- Each demo case is a folder under `./source` with a correspondingly named folder in `build`

#### Links

- Prior art: https://github.com/kimamula/tree-shaking-demo
- https://medium.com/@zwegrzyniak/webpack-4-1-and-es-modules-esm-dd0bd7dca4da
- https://stackoverflow.com/questions/42051588/wildcard-or-asterisk-vs-named-or-selective-import-es6-javascript
- https://medium.com/webpack/better-tree-shaking-with-deep-scope-analysis-a0b788c0ce77
- https://gist.github.com/Rich-Harris/24a8ddd3947150aa8c15a9367faf1d62
