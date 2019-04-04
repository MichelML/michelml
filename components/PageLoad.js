import React from "react";
import FadeOut from "../transitions/FadeOut";

class PageLoad extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: false }), 1000);
  }

  render() {
    return (
      <FadeOut in={this.state.show}>
        <div id="pageLoad">
          <div id="loadingDot" />
        </div>
      </FadeOut>
    );
  }
}

export default PageLoad;
