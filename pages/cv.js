import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";
import React from "react";
import Router from "next/router";

const cvLink = "https://app.enhancv.com/share/e542d0db";
const name = "CV";

class CV extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: cvLink
      });
      res.end();
    } else {
      try {
        window.location.href = cvLink;
      } catch (e) {
        Router.push("/");
      }
      return {};
    }
  }

  componentDidMount() {
    window.location.href = cvLink;
  }

  render() {
    return null;
  }
}

export default compose(decorate({ name }))(CV);
