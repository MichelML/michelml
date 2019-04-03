import { compose } from "lodash/fp";
import withHead from "../hoc/withHead";
import withHeader from "../hoc/withHeader";
import withTheme from "../hoc/withTheme";

const name = "Blog";

function Blog() {
  return <div>Blog</div>;
}

export default compose(
  withTheme(),
  withHeader({ name }),
  withHead({ name })
)(Blog);
