import { compose } from "lodash/fp";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import decorate from "../hoc/decorate";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px"
  },
  heroContent: {
    maxWidth: 600,
    minHeight: "calc(100vh - 300px)",
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heroEmail: {
    textDecoration: "none"
  }
});

const name = "Email";

function Email(props) {
  const { classes } = props;

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
              gutterBottom
            >
              Email me @
            </Typography>
            <a
              href="mailto:michmoreau.l@gmail.com"
              className={classes.heroEmail}
            >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="primary"
                className={classes.heroEmail}
                gutterBottom
              >
                michmoreau.l@gmail.com
              </Typography>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default compose(
  decorate({ name }),
  withStyles(styles)
)(Email);
