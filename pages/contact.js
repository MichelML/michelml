import { compose } from "lodash/fp";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { default as MuiLink } from "@material-ui/core/Link";
import decorate from "../hoc/decorate";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px"
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    minHeight: "calc(100vh - 300px)",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 2
  },
  heroButton: {
    "&:hover": { textDecoration: "none" }
  }
});

const name = "Contact";

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Nice to meet you.
            </Typography>
            <Typography
              component="h2"
              variant="subtitle1"
              align="center"
              color="textPrimary"
            >
              Please find me on the platforms below.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <MuiLink
                    href="https://www.linkedin.com/in/michelmoreau1/"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      linkedin
                    </Button>
                  </MuiLink>
                </Grid>
                <Grid item>
                  <MuiLink
                    href="https://www.github.com/michelml"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      github
                    </Button>
                  </MuiLink>
                </Grid>
              </Grid>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <MuiLink
                    href="https://www.researchgate.net/profile/Michel_Moreau4"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      research gate
                    </Button>
                  </MuiLink>
                </Grid>
                <Grid item>
                  <MuiLink
                    href="https://www.kaggle.com/michelml"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      Kaggle
                    </Button>
                  </MuiLink>
                </Grid>
              </Grid>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <MuiLink
                    href="https://medium.com/@michmoreau.l"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      medium
                    </Button>
                  </MuiLink>
                </Grid>
                <Grid item>
                  <MuiLink
                    href="https://twitter.com/michelml6"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      Twitter
                    </Button>
                  </MuiLink>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default compose(
  decorate({ name, ads: true }),
  withStyles(styles)
)(Home);
