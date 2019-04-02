import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import withTheme from '../hoc/withTheme'

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [
      theme
        .breakpoints
        .up(1100 + theme.spacing.unit * 3 * 2)
    ]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});

const name = "Home"

function Home(props) {
  const {classes} = props;

  return (
    <React.Fragment>
      <CssBaseline/>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              Website coming soon
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Something short, but not too short so folks don&apos;t
              simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={12} justify="center">
                <Grid item>
                  <Button variant="flat" color="primary">
                    linkedin
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="flat" color="primary">
                    github
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="flat" color="primary">
                    medium
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="flat" color="primary">
                    quora
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="flat" color="primary">
                    email
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default compose(withTheme(), withHeader({name}), withHead({name}), withStyles(styles),)(Home)