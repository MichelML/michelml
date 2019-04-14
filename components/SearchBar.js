import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "300px",
    margin: "auto",
    marginBottom: theme.spacing.unit * 2,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0,0,0,0.75)"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    transition: theme.transitions.create("border"),
    border: "1px solid rgba(0,0,0,0.1)",
    "&:focus": {
      border: "1px solid rgba(0,0,0,0.75)"
    },
    borderRadius: theme.shape.borderRadius,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    width: 228
  }
});

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={this.props.placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onChange={(event) => this.props.onChange(event)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchBar);
