import React from "react";
import {withStyles} from "@material-ui/core/styles";
import assetUrl from "../utils/assetUrl";

const styles = theme => ({
  fullScreen: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    zIndex: "1000",
    backgroundColor: "#fff",
    display: "flex"
  },
  loadingDotContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  loadingDot: {
    display: "block",
    margin: "auto"
  }
});

class PageLoad extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      show: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({show: false}), 500);
  }

  render() {
    const {classes} = this.props;
    return this.state.show && (
      <div id="pageLoad" className={classes.fullScreen}>
        <div className={classes.loadingDotContainer}>
          <img
            src={assetUrl("static/favicons/favicon-32x32.png")}
            width="32"
            height="32"
            className={classes.loadingDot}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PageLoad);
