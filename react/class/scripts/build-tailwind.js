const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

async function build() {
  const inPath = path.resolve(__dirname, "../src/index.css");
  const outDir = path.resolve(__dirname, "../dist");
  const outPath = path.join(outDir, "tailwind.css");
  const css = fs.readFileSync(inPath, "utf8");
  const result = await postcss([tailwind, autoprefixer]).process(css, {
    from: inPath,
  });
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  fs.writeFileSync(outPath, result.css);
  console.log("Wrote", outPath);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
