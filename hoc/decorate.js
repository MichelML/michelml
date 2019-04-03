import { compose } from "lodash/fp";
import withHead from "./withHead";
import withHeader from "./withHeader";
import withTheme from "./withTheme";
import withPageLoad from "./withPageLoad";

export default ({name}) => compose(
  withTheme(),
  withPageLoad(),
  withHeader({ name }),
  withHead({ name }),
);