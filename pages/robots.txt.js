import React from "react";
const robotsTxt = `
User-agent: * 
Disallow: 
`;

export default class extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/plain");
    res.write(robotsTxt);
    res.end();
  }
}
