const fs = require("fs");
const trianglify = require("trianglify");
const svgToImg = require("svg-to-img");
const download = require("image-downloader");

const deepaiKey = "f5448788-d4ba-439f-a9d3-ad517438797f";
const deepai = require("deepai");
deepai.setApiKey(deepaiKey);

module.exports = async cleanName => {
  const variance = Math.round(Math.random() * 100) / 100;
  const seed = Math.round(Math.random() * 1000);
  const svg = trianglify({ variance, seed, x_colors: "random" }).svg();
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  fs.writeFileSync(`static/postimages/${cleanName}.svg`, svg.outerHTML, "utf8");

  await svgToImg.from(svg.outerHTML).toJpeg({
    path: "./temp.jpg"
  });
  try {
    const resp = await deepai.callStandardApi("deepdream", {
      image: fs.createReadStream("./temp.jpg")
    });

    await download.image({
      url: resp.output_url,
      dest: `static/postimages/${cleanName}.jpg`
    });

    fs.unlinkSync("./temp.jpg");

    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
};
