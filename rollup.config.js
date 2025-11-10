import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.js", format: "cjs", exports: "named" },
    { file: "dist/index.es.js", format: "es" }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    commonjs(),
    postcss({ extensions: [".css"] })
  ],
  external: ["react", "react-dom"]
};
