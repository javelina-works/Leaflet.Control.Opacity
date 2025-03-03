import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/L.Control.Opacity.js", // Entry file
  output: [
    {
      file: "dist/L.Control.Opacity.js",
      format: "umd",
      name: "L.Control.Opacity",
      sourcemap: true,
    },
    {
      file: "dist/L.Control.Opacity.min.js",
      format: "umd",
      name: "L.Control.Opacity",
      plugins: [terser()], // Minifies the file
    },
  ],
  plugins: [resolve()],
};
