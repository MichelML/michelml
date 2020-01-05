import _ from "lodash";
import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";
import React from "react";
import Router from "next/router";

const name = "Redirect to Contact";

class Main extends React.Component {}

const MainPage = compose(decorate({ name, ads: true }))(MainPage);

MainPage.getInitialProps = async ({ res }) => {
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

export default MainPage;
