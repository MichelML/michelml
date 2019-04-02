import { compose } from "lodash/fp";
import withHead from "../hoc/withHead";
import withHeader from "../hoc/withHeader";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withTheme from "../hoc/withTheme";
import Link from "next/link";
import {default as MuiLink} from "@material-ui/core/Link"

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
              <Grid container spacing={12} justify="center">
                <Grid item>
                  <Link href="https://www.linkedin.com/in/michelmoreau1/">
                    <Button variant="flat" color="primary">
                      linkedin
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                <Link href="https://www.github.com/michelml">
                    <Button variant="flat" color="primary">
                      github
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://medium.com/@michmoreau.l">
                    <Button variant="flat" color="primary">
                      medium
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://www.quora.com/profile/Michel-Moreau-10">
                    <Button variant="flat" color="primary">
                      quora
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/email">
                    <Button variant="flat" color="primary">
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
  withTheme(),
  withHeader({ name }),
  withHead({ name }),
  withStyles(styles)
)(Home);
