import { compose } from "lodash/fp";
import decorate from "../hoc/decorate";

const name = "Bookshelf";

function Books() {
  return <div>Bookshelf</div>;
}

export default compose(decorate({ name }))(Books);
