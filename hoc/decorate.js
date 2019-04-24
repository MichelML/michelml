import { compose } from "lodash/fp";
import withHead from "./withHead";
import withHeader from "./withHeader";
import withTheme from "./withTheme";
import withPageLoad from "./withPageLoad";
import withFooter from "./withFooter";
import withAds from "./withAds";

export default ({ name, ads }) => {
  const withGoogleAds = ads ? [withAds()] : [];

  return compose(
    withTheme(),
    withPageLoad(),
    withFooter(),
    withHeader({ activeName: name }),
    ...withGoogleAds,
    withHead({ name })
  );
};
