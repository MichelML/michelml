import { compose } from "lodash/fp";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import decorate from "../hoc/decorate";
import classNames from "classnames";
import assetUrl from "../utils/assetUrl";

const styles = theme => ({
  layout: {
    width: "auto",
    maxWidth: "400px",
    margin: "auto",
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    },
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`
  },
  profilePic: {
    width: "200px",
    height: "200px",
    backgroundImage: `url("${assetUrl("static/profile.jpeg")}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    margin: "auto",
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
      marginTop: theme.spacing.unit * 2
    },
    marginBottom: theme.spacing.unit * 4
  }
});

const name = "About";

function About(props) {
  const { classes } = props;

  return (
    <main className={classNames(classes.layout)}>
      <picture>
        <div className={classes.profilePic} />
      </picture>
      <Typography
        component="h5"
        variant="body1"
        color="textPrimary"
        gutterBottom
      >
        <p>
          Michel Moreau is a self-taught software developer specializing in web
          development and machine learning. He started programming in 2014
          during his early career as a Public Health researcher. He has never
          stopped since.
        </p>
        <p>
          He holds an incessant interest in the creation of problem-solving
          software systems, learning more about the craft each day through the
          internet, books, projects, work, as well as online programs and
          certifications.
        </p>
        <p>
          He loves to learn broadly and constantly - buying more books than he
          can read, and signing up for more online programs than he can take.
        </p>
        <p>
          Having occupied various positions in different fields and work
          environments (professionally and as an ex-athlete), he is not afraid
          to lead or follow depending on the context at hand.
        </p>
        <p>
          Perspective-taker, lifelong learner, avid book reader, growth mindset.
        </p>
      </Typography>
    </main>
  );
}

export default compose(
  decorate({ name }),
  withStyles(styles)
)(About);
