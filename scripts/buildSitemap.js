#! /usr/bin/env node
// from https://gist.github.com/evantahler/ba75e277c756fce337b7370035b298e7

const path = require("path");
const glob = require("glob");
const fs = require("fs");

const { books: allBooks } = require("../allBooks.json");
const allPosts = require("../allPosts.json");

const SITE_ROOT = process.env.SITE_ROOT || "https://www.michelml.com";
const SOURCE =
  process.env.SOURCE || path.join(__dirname, "..", "pages", "/**/*.js");
const DESTINATION =
  process.env.DESTINATION ||
  path.join(__dirname, "..", "static", "sitemap.xml.json");

let diskPages = glob.sync(SOURCE);

let xml = "";
xml += '<?xml version="1.0" encoding="UTF-8"?>';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

diskPages.forEach(page => {
  console.log(page);
  let stats = fs.statSync(page);
  let modDate = new Date(stats.mtime);
  let lastMod = `${modDate.getFullYear()}-${(
    "0" +
    (modDate.getMonth() + 1)
  ).slice(-2)}-${("0" + modDate.getDate()).slice(-2)}`;

  page = page.replace(path.join(__dirname, "..", "pages"), "");
  page = page.replace(/.js$/, "");
  page = `${SITE_ROOT}${page}`;

  if (page.match(/.*\/index$/)) {
    page = page.replace(/(.*)index$/, "$1");
  }

  xml += "<url>";
  xml += `<loc>${page}</loc>`;
  xml += `<lastmod>${lastMod}</lastmod>`;
  xml += `<changefreq>always</changefreq>`;
  xml += `<priority>0.5</priority>`;
  xml += "</url>";
});

allBooks.forEach(book => {
  let stats = fs.statSync(path.join(__dirname, "..", "pages", "/book.js"));
  let modDate = new Date(stats.mtime);
  let lastMod = `${modDate.getFullYear()}-${(
    "0" +
    (modDate.getMonth() + 1)
  ).slice(-2)}-${("0" + modDate.getDate()).slice(-2)}`;

  xml += "<url>";
  xml += `<loc>https://www.michelml.com/book?book=${book.cleanName}</loc>`;
  xml += `<lastmod>${lastMod}</lastmod>`;
  xml += `<changefreq>always</changefreq>`;
  xml += `<priority>0.5</priority>`;
  xml += "</url>";
});

allPosts.forEach(post => {
  let stats = fs.statSync(path.join(__dirname, "..", "pages", "/post.js"));
  let modDate = new Date(stats.mtime);
  let lastMod = `${modDate.getFullYear()}-${(
    "0" +
    (modDate.getMonth() + 1)
  ).slice(-2)}-${("0" + modDate.getDate()).slice(-2)}`;

  xml += "<url>";
  xml += `<loc>https://www.michelml.com/post?post=${post.cleanName}</loc>`;
  xml += `<lastmod>${lastMod}</lastmod>`;
  xml += `<changefreq>always</changefreq>`;
  xml += `<priority>0.5</priority>`;
  xml += "</url>";
});

xml += "</urlset>";

fs.writeFileSync(DESTINATION, JSON.stringify({ xml }));

console.log(
  `Wrote sitemap for ${diskPages.length +
    allPosts.length +
    allBooks.length} pages to ${DESTINATION}`
);
