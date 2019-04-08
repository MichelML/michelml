import { compose } from "lodash/fp";
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
import { withStyles } from "@material-ui/core/styles";
import books from "../allBooks.json";

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
  cardMediaContainer: {
    background: "linear-gradient(141deg, #e0e0e0 0%, #ededed 51%, #f9f9f9 75%)",
  },
  cardMedia: {
    width: '150px',
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
    backgroundPosition: 'center',
    borderRadius: "3px",
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMore: {
    cursor: "pointer"
  }
});

const name = "Bookshelf";

function Bookshelf(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40}>
        {books.map(book => (
          <Grid item key={book.volumeInfo.title} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <Link
                href={`/bookshelf/${book.volumeInfo.title.replace(/\s/g, "")}`}
              >
              <CardContent className={classes.cardMediaContainer}>
                <CardMedia
                  className={classes.cardMedia}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  title={book.volumeInfo.title}
                />
              </CardContent>
              </Link>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.volumeInfo.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subheading"
                  component="h6"
                  color="textSecondary"
                >
                  {book.volumeInfo.authors.join(", ")}
                </Typography>
                <Typography>
                  {striptags(book.volumeInfo.description.slice(0, 200)) + "..."}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/bookshelf/${book.volumeInfo.title.replace(/\s/g, "")}`}>
                  <Button variant="text" color="primary">
                    View book
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
)(Bookshelf);
