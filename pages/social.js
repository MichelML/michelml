import _ from "lodash";
import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";
import React from "react";
import Router from "next/router"

const name = "Social";

class Social extends React.Component {}

const SocialPage = compose(
  decorate({ name, ads: true }),
)(Social);

SocialPage.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: "/contact"
    });
    res.end();
  } else {
    Router.push("/contact");
  }
  return {};
};

export default SocialPage;
