import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

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
    flexGrow: 1,
  }
};

function HeaderBar(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense" className={classes.toolBar}>
          <Link href="/">
            <Typography variant="h6" color="inherit" className={classes.typo}>
              MichelML
            </Typography>
          </Link>
          <div className={classes.grow}></div>
          <Button color="inherit" href="/blog">Blog</Button>
          <Button color="inherit" href="/books">Books</Button>
          <Button color="inherit" href="/about">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);