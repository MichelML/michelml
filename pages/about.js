import { compose } from "lodash/fp";
import "../styles/normalize.css";
import withHead from "../hoc/withHead";
import withHeader from "../hoc/withHeader";
import withTheme from "../hoc/withTheme";

const name = "About";

function About() {
  return <div>About</div>;
}

export default compose(
  withTheme(),
  withHeader({ name }),
  withHead({ name })
)(About);
