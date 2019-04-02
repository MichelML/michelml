import {compose} from "lodash/fp";
import withHead from "../hoc/withHead";
import withHeader from "../hoc/withHeader";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import withTheme from "../hoc/withTheme";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroEmail: {
    textDecoration: "underline"
  }
});

const name = "Email";

function Email(props) {
  const {classes} = props;

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom>
              Please email me at
            </Typography>
            <a href="mailto:michmoreau.l@gmail.com">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
              className={classes.heroEmail}
              gutterBottom>
              michmoreau.l@gmail.com
            </Typography>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default compose(withTheme(), withHeader({name}), withHead({name}), withStyles(styles))(Email);
