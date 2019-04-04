import { compose } from "lodash/fp";
import withHead from "./withHead";
import withHeader from "./withHeader";
import withTheme from "./withTheme";
import withPageLoad from "./withPageLoad";
import withFooter from "./withFooter";

export default ({ name }) =>
  compose(
    withTheme(),
    withPageLoad(),
    withFooter(),
    withHeader({ name }),
    withHead({ name })
  );
