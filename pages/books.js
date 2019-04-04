import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";

const name = "Books";

function Books() {
  return <div>Books</div>;
}

export default compose(decorate({ name }))(Books);
