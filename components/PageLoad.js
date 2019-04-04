import React from "react";

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
      this.state.show && (
        <div id="pageLoad">
          <div id="loadingDot" />
        </div>
      )
    );
  }
}

export default PageLoad;
