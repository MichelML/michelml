import { compose } from "lodash/fp";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { default as MuiLink } from "@material-ui/core/Link";
import decorate from "../hoc/decorate";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  heroButton: {
    "&:hover": { textDecoration: "none" }
  }
});

const name = "Home";

function Home(props) {
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
              Hi, nice to meet you.
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              This website is in development.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Insert a short quote - but not too short so folks don&apos;t
              simply skip over it entirely.
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
                    href="https://www.quora.com/profile/Michel-Moreau-10"
                    className={classes.heroButton}
                  >
                    <Button variant="text" color="primary">
                      quora
                    </Button>
                  </MuiLink>
                </Grid>
                <Grid item>
                  <Link href="/email">
                    <Button variant="text" color="primary">
                      email
                    </Button>
                  </Link>
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
  decorate({ name }),
  withStyles(styles)
)(Home);
