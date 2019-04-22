import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import decorate from "../hoc/decorate";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
});

const name = "Login";

class Login extends React.Component {
  render() {
    return (
      <main className={this.props.classes.layout}>
        login
      </main>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  decorate({ name })
)(Login);
