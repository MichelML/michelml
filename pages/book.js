import { compose } from "lodash/fp";
import classNames from "classnames";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import striptags from "striptags";
import { withStyles } from "@material-ui/core/styles";
import assetUrl from "../utils/assetUrl";
import decorate from "../hoc/decorate";
import Head from "next/head";
import Link from "next/link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    height: "100%",
    width: "250px",
    margin: "auto"
  },
  cardMediaContainer: {
    background: "#eacda3",
    background: "-webkit-linear-gradient(to left, #f6ebda, #fcfaf5)",
    background: "linear-gradient(to left, #f6ebda, #fcfaf5)"
  },
  cardMedia: {
    width: "128px",
    height: "169px",
    backgroundPosition: "center",
    borderRadius: "3px",
    margin: "auto"
  },
  cardContent: {
    flexGrow: 1
  },
  bookInfo: {
    marginTop: theme.spacing.unit * 4
  },
  browseBooksMargin: {
    marginTop: theme.spacing.unit * 4
  }
});

function Book(props) {
  const { classes, book } = props;

  const BookNotFound = () => (
    <div>
      <Head>
        <title>Michel ML - Book Not Found</title>
      </Head>
      <main className={classNames(classes.layout)}>
        <Typography gutterBottom variant="h3" component="h1" align="left">
          Book Not Found.
        </Typography>
        <Typography variant="body1" align="left">
          We were unable to find the requested book.
        </Typography>
        <Link href="/library">
          <Button className={classes.browseBooksMargin} color="primary">
            <ArrowBackIcon />
            Browse other books
          </Button>
        </Link>
      </main>
    </div>
  );

  return !book ? (
    <BookNotFound />
  ) : (
    <div>
      <Head>
        <title>Michel ML - Book - {book.volumeInfo.title}</title>
      </Head>
      <article className={classNames(classes.layout)}>
        <Card className={classes.card}>
          <CardContent className={classes.cardMediaContainer}>
            <CardMedia
              className={classes.cardMedia}
              image={
                book.volumeInfo.imageLinks
                  ? assetUrl(book.volumeInfo.imageLinks.smallThumbnail, {
                      external: true
                    })
                  : assetUrl("static/product_image_not_found.gif")
              }
              title={book.volumeInfo.title}
            />
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="h2">
              {book.volumeInfo.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="h6"
              color="textSecondary"
            >
              {(book.volumeInfo.authors &&
                book.volumeInfo.authors.join(", ")) ||
                "Unknown author"}
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.bookInfo}>
          <Typography gutterBottom variant="subtitle1">
            Description
          </Typography>
          <Typography variant="body2">
            {striptags(book.volumeInfo.description || "No description")}
          </Typography>
        </div>
        <Link href="/library">
          <Button className={classes.browseBooksMargin} color="primary">
            <ArrowBackIcon />
            Browse other books
          </Button>
        </Link>
      </article>
    </div>
  );
}

Book = compose(
  decorate({ name: "Book", ads: true }),
  withStyles(styles)
)(Book);

Book.getInitialProps = async ({ query }) => {
  let book;
  try {
    book = await require(`../library/${query.book}.json`);
  } catch (e) {
    book = null;
  }
  return { book };
};

export default Book;
