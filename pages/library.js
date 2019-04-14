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
import assetUrl from "../utils/assetUrl";
import SearchBar from "../components/SearchBar";

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
    padding: `${theme.spacing.unit * 2}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMediaContainer: {
    background: "#eacda3",
    background: "-webkit-linear-gradient(to left, #f6ebda, #fcfaf5)",
    background: "linear-gradient(to left, #f6ebda, #fcfaf5)",
    cursor: "pointer"
  },
  cardMedia: {
    width: "128px",
    height: "169px",
    cursor: "pointer",
    backgroundPosition: "center",
    borderRadius: "3px",
    margin: "auto"
  },
  cardContent: {
    flexGrow: 1
  },
  cardMore: {
    cursor: "pointer"
  },
  cardActions: {
    paddingTop: 0,
    marginTop: -theme.spacing.unit * 2
  }
});

const name = "Library";

class Library extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      loadedBooks: 12,
      displayedBooks: books
    };

    this.loadMore = this.loadMore.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMore);
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        id="library"
        className={classNames(classes.layout, classes.cardGrid)}
      >
        <SearchBar
          placeholder="Search by author or title..."
          onChange={this.onSearch}
        />
        <Grid container justify="center" spacing={40}>
          {this.renderBooks()}
        </Grid>
      </div>
    );
  }

  renderBooks() {
    const { classes } = this.props;

    return !this.state.displayedBooks.length ? (
      <div>No results</div>
    ) : (
      this.state.displayedBooks.slice(0, this.state.loadedBooks).map(book => (
        <Grid item key={book.volumeInfo.title} xs={10} sm={6} md={4} lg={4}>
          <Card className={classes.card}>
            <Link href={`/library/${book.cleanName}`}>
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
            </Link>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="body1" component="h2">
                {book.volumeInfo.title}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                color="textSecondary"
              >
                {book.volumeInfo.authors.join(", ")}
              </Typography>
            </CardContent>
            <CardActions classes={{root: classes.cardActions}}>
              <Link href={`/library/${book.cleanName}`}>
                <Button variant="text" color="primary">
                  View book
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))
    );
  }

  loadMore() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.setState({ loadedBooks: this.state.loadedBooks + 12 });
    }
  }

  onSearch(event) {
    const query = event.target.value.trim().toLowerCase();
    const displayedBooks = books.filter(book => {
      if (!query) return true;

      const formattedTitle = book.volumeInfo.title.toLowerCase();
      const formattedAuthors = book.volumeInfo.authors.join("").toLowerCase();

      return (
        formattedTitle.indexOf(query) > -1 ||
        formattedAuthors.indexOf(query) > -1
      );
    });

    this.setState({ displayedBooks, loadedBooks: 12 });
  }
}

export default compose(
  decorate({ name }),
  withStyles(styles)
)(Library);
