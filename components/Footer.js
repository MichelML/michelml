import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 4,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32}>
          <Typography variant="caption" align="left" color="textPrimary">
            Copyright © {new Date().getFullYear()} Michel Moreau
          </Typography>
        </Grid>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
