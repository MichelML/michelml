import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const styles = {
  root: {
    flexGrow: 1
  },
  toolBar: {
    backgroundColor: "#fff"
  },
  typo: {
    cursor: "pointer",
    padding: "0 20px 0 0"
  },
  grow: {
    flexGrow: 1
  },
  activeName: {
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

class HeaderBar extends React.Component {
  static HeaderLink = ({ activeName, name, href, classes }) => (
    <Link href={href}>
      <Button
        color="inherit"
        className={activeName === name ? classes.activeName : undefined}
      >
        {name}
      </Button>
    </Link>
  );

  render() {
    const { classes, activeName } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar variant="dense" className={classes.toolBar}>
            <Link href="/">
              <Typography
                variant="subheading"
                color="inherit"
                className={classes.typo}
              >
                MichelML
              </Typography>
            </Link>
            <div className={classes.grow} />
            <HeaderBar.HeaderLink
              activeName={activeName}
              classes={classes}
              name="Blog"
              href="/blog"
            />
            <HeaderBar.HeaderLink
              activeName={activeName}
              classes={classes}
              name="Library"
              href="/library"
            />
            <HeaderBar.HeaderLink
              activeName={activeName}
              classes={classes}
              name="About"
              href="/about"
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
