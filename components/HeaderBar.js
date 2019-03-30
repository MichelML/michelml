import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
};

function HeaderBar(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense" className={classes.toolBar}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MichelML
          </Typography>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Books</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);