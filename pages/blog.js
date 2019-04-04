import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";

const name = "Blog";

function Blog() {
  return <div>Blog</div>;
}

export default compose(decorate({ name }))(Blog);
