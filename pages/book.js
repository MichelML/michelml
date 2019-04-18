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
import urlJoin from "url-join";
import { withRouter } from "next/router";
import decorate from "../hoc/decorate";
import Head from "next/head";

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
  }
});

class Book extends React.Component {
  state = {
    book: null
  };

  async componentDidMount() {
    try {
      const book = await require(`../library/${
        this.props.router.query.book
      }.json`);
      this.setState({ book });
    } catch (e) {
      this.props.router.replace(urlJoin(location.origin, "404"));
    }
  }

  render() {
    const { classes } = this.props;
    const { book } = this.state;
    return (
      this.state.book && (
        <>
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
          </article>
        </>
      )
    );
  }
}

export default compose(
  withRouter,
  decorate({ name: "Book" }),
  withStyles(styles)
)(Book);
