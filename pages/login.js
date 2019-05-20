import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import Router from 'next/router'
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
  }
});

const name = "Login";

class Login extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: process.env.rootUrl
      })
      res.end()
    } else {
      Router.push(process.env.rootUrl)
    }
    return {}
  }

  render() {
    return (
      <main className={this.props.classes.layout}>
        <div class="g-signin2" data-onsuccess="onSignIn" />
      </main>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  decorate({ name })
)(Login);
