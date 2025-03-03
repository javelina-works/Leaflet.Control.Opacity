import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import copy from "rollup-plugin-copy";

export default [
  // Non-minified version
  {
    input: "src/L.Control.Opacity.js",
    output: {
      file: "dist/L.Control.Opacity.js",
      format: "umd",
      name: "L.Control.Opacity",
      sourcemap: false, // Remove source map for this small plugin
    },
    plugins: [
      resolve(),
      copy({
        targets: [
          { src: "src/L.Control.Opacity.css", dest: "dist" }, // Copy CSS
          { src: "src/L.Control.Opacity.d.ts", dest: "dist" }, // Copy .d.ts
        ]
      })
    ],
  },

  // ✅ Minified version
  {
    input: "src/L.Control.Opacity.js",
    output: {
      file: "dist/L.Control.Opacity.min.js",
      format: "umd",
      name: "L.Control.Opacity",
      sourcemap: false, // Remove source map for this small plugin
    },
    plugins: [
      resolve(),
      terser({
        mangle: true,  // Preserve variable names
        compress: {
          passes: 2,  // Ensures safe optimization
          unsafe: false,  // Prevents aggressive minification
        },
      }),
      copy({
        targets: [
          { src: "src/L.Control.Opacity.css", dest: "dist" }, // Copy CSS (again)
        ]
      })
    ],
  }
];
