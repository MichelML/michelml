import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  groupName: {
    marginBottom: theme.spacing.unit
  },
  checkbox: {
    padding: "0 0 0 12px"
  }
});

class CheckboxesGroup extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.groupName}>
          {this.props.groupName}
        </FormLabel>
        <FormGroup>{this.renderCheckboxes()}</FormGroup>
      </FormControl>
    );
  }

  renderCheckboxes() {
    const { classes } = this.props;

    return _.chain(this.props.items)
      .sortBy("name")
      .partition(item => item.checked)
      .flatten()
      .value()
      .map(item => (
        <FormControlLabel
          key={item.name}
          control={
            <Checkbox
              checked={item.checked}
              color="primary"
              className={classes.checkbox}
              onChange={event => this.props.onChange(event, item.name)}
              value={item.name}
            />
          }
          label={item.name}
        />
      ));
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxesGroup);
