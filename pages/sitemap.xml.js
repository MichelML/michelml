import React from "react";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    const sitemap = await require("../static/sitemap.xml.json");
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap.xml);
    res.end();
  }
}
