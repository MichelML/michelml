import { compose } from "lodash/fp";
import moment from "moment";
import decorate from "../hoc/decorate";
import classNames from "classnames";
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import striptags from "striptags";
import assetUrl from "../utils/assetUrl";
import { withStyles } from "@material-ui/core/styles";
import posts from "../allPosts.json";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    cursor: "pointer"
  },
  cardContent: {
    flexGrow: 1
  },
  cardMore: {
    cursor: "pointer"
  }
});

const name = "Blog";

function Blog(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40}>
        {posts.map(post => (
          <Grid item key={post.name} sm={6} md={6} lg={6}>
            <Card className={classes.card}>
              <Link
                href={`/post?post=${post.cleanName}`}
              >
                <CardMedia
                  className={classes.cardMedia}
                  image={post.img}
                  title={post.name}
                />
              </Link>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h6"
                  color="textSecondary"
                >
                  {post.author} - {moment(post.date).format("MMMM Do YYYY")}
                </Typography>
                <Typography>
                  {striptags(post.post.slice(0, 300)) + "..."}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/post?post=${post.cleanName}`}>
                  <Button variant="text" color="primary">
                    Read article
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default compose(
  decorate({ name }),
  withStyles(styles)
)(Blog);
