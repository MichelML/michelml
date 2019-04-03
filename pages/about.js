import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";

const name = "About";

function About() {
  return <div>About</div>;
}

export default compose(
  decorate({name}),
)(About);
