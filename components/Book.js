import { compose } from "lodash/fp";
import classNames from "classnames";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import striptags from "striptags";
import { withStyles } from "@material-ui/core/styles";

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
  }
});

function Book(props) {
  const { classes, book } = props;
  return (
    <article className={classNames(classes.layout)}>
      <Card className={classes.card}>
        <CardContent className={classes.cardMediaContainer}>
          <CardMedia
            className={classes.cardMedia}
            image={book.volumeInfo.imageLinks.smallThumbnail}
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
            {book.volumeInfo.authors.join(", ")}
          </Typography>
        </CardContent>
      </Card>
      <div>
        <Typography variant="subheading">Description</Typography>
        <Typography variant="body2">
          {striptags(book.volumeInfo.description || "No description")}
        </Typography>
      </div>
    </article>
  );
}

export default compose(withStyles(styles))(Book);
