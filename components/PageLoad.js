import React from "react";
import assetUrl from "../utils/assetUrl";

class PageLoad extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: false }), 500);
  }

  render() {
    return (
      this.state.show && (
        <div id="pageLoad">
          <div id="loadingDotContainer">
            <img
              id="loadingDot"
              src={assetUrl("static/favicons/favicon-32x32.png")}
              width="32"
              height="32"
            />
          </div>
        </div>
      )
    );
  }
}

export default PageLoad;
