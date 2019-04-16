import { compose } from "lodash/fp";
import _ from "lodash";
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
import { withStyles } from "@material-ui/core/styles";
import books from "../allBooks.json";
import assetUrl from "../utils/assetUrl";
import SearchBar from "../components/SearchBar";
import FilterList from "@material-ui/icons/FilterList";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckboxesGroup from "../components/CheckboxesGroup";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/Badge";

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
  },
  filters: {
    padding: `${theme.spacing.unit * 2}px 0`
  },
  facetsIcon: {
    cursor: "pointer",
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing.unit * 1
    }
  },
  inlineBlock: {
    display: "inline-block"
  }
});

const name = "Library";

class Library extends React.Component {
  static BookStatus = {
    groupName: "Status",
    items: [
      { name: "Read" },
      { name: "Skimmed" },
      { name: "Unread" },
      { name: "Unknown" }
    ]
  };

  static BookReview = {
    groupName: "Review",
    items: [{ name: "Has review" }, { name: "No review" }]
  };

  static BookCategory = {
    groupName: "Category",
    items: compose(
      booksCategories => booksCategories.map(category => ({ name: category })),
      booksCategories => _.compact(_.uniq(booksCategories)),
      booksCategories => _.flatten(booksCategories),
      books => books.map(book => _.get(book, "volumeInfo.categories"), [])
    )(books)
  };

  static getAllFacetItems = () => [
    ...Library.BookStatus.items,
    ...Library.BookReview.items,
    ...Library.BookCategory.items
  ];

  constructor(props, state) {
    super(props, state);

    this.state = {
      loadedBooks: 12,
      displayedBooks: books,
      showFilters: false,
      ...Library.getAllFacetItems().reduce(
        (checkboxesState, item) => ({ ...checkboxesState, [item.name]: false }),
        {}
      ),
      selectedFacets: []
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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.filters}
        >
          {this.renderFacetsView()}
          <div />
          <div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.filters}
            >
              <SearchBar
                placeholder="Search author or title..."
                onChange={this.onSearch}
                className={classes.inlineBlock}
              />

              <Badge
                badgeContent={this.getSelectedFacets().length}
                color="primary"
              >
                <FilterList
                  className={classNames(
                    classes.facetsIcon,
                    classes.inlineBlock
                  )}
                  fontSize="large"
                  onClick={() => this.setState({ showFilters: true })}
                />
              </Badge>
            </Grid>
          </div>
          <div />
        </Grid>
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
              <Typography variant="body2" component="h6" color="textSecondary">
                {(book.volumeInfo.authors &&
                  book.volumeInfo.authors.join(", ")) ||
                  "Unknown author"}
              </Typography>
            </CardContent>
            <CardActions classes={{ root: classes.cardActions }}>
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

  search(searchQuery, booksList) {
    const displayedBooks = booksList.filter(book => {
      if (!searchQuery) return true;

      const formattedTitle = book.volumeInfo.title.toLowerCase();
      const formattedAuthors =
        (book.volumeInfo.authors &&
          book.volumeInfo.authors.join("").toLowerCase()) ||
        "";

      return (
        formattedTitle.indexOf(searchQuery) > -1 ||
        formattedAuthors.indexOf(searchQuery) > -1
      );
    });

    return { displayedBooks, searchQuery, loadedBooks: 12 };
  }

  onSearch(event) {
    this.setState(
      this.search(
        event.target.value.trim().toLowerCase(),
        this.getBooksFromFacets()
      )
    );
  }

  renderFacetsView() {
    return (
      <Dialog
        aria-labelledby="Library facets"
        open={this.state.showFilters}
        scroll="body"
        keepMounted
        fullScreen
        onClose={() => this.setState({ showFilters: false })}
      >
        <DialogTitle id="facets-groups">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div>
              Library Facets{" "}
              <Typography gutterBottom display="inline-block" variant="body2">
                {this.state.displayedBooks.length} results
              </Typography>
            </div>
            <IconButton
              color="inherit"
              onClick={() => this.setState({ showFilters: false })}
              aria-label="Close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            {this.renderFacetsGroup(Library.BookStatus)}
            {this.renderFacetsGroup(Library.BookReview)}
            {this.renderFacetsGroup(Library.BookCategory)}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.clearAllFacets()} color="primary">
            Clear All
          </Button>
          <Button
            onClick={() => this.setState({ showFilters: false })}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderFacetsGroup({ groupName, items }) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CheckboxesGroup
          groupName={groupName}
          items={items.map(item => ({
            ...item,
            checked: this.state[item.name]
          }))}
          onChange={(event, name) => this.handleFacetChange(event, name)}
        />
      </Grid>
    );
  }

  clearAllFacets() {
    this.setState(
      {
        ...Library.getAllFacetItems().reduce(
          (checkboxesState, item) => ({
            ...checkboxesState,
            [item.name]: false
          }),
          {}
        ),
        selectedFacets: []
      },
      () => this.getBooksFromSearchAndFacets()
    );
  }

  handleFacetChange = (event, name) => {
    this.setState(
      {
        [name]: event.target.checked,
        selectedFacets: !event.target.checked
          ? _.without(this.state.selectedFacets, name)
          : [...this.state.selectedFacets, name]
      },
      () => this.getBooksFromSearchAndFacets()
    );
  };

  getSelectedFacets() {
    return this.state.selectedFacets;
  }

  getBooksWithSelectedStatuses = booksList => {
    const allSelectedFacets = this.getSelectedFacets();
    const statusSelectedFacets = _.intersection(
      _.map(Library.BookStatus.items, "name"),
      allSelectedFacets
    );

    return statusSelectedFacets.length
      ? booksList.filter(
          book =>
            statusSelectedFacets.includes(book.readingStatus) ||
            (statusSelectedFacets.includes("Unknown") &&
              book.readingStatus === undefined)
        )
      : booksList;
  };

  getBooksWithSelectedReviewStatus = booksList => {
    const allSelectedFacets = this.getSelectedFacets();
    const reviewStatusSelectedFacets = _.intersection(
      _.map(Library.BookReview.items, "name"),
      allSelectedFacets
    );

    return reviewStatusSelectedFacets.length
      ? booksList.filter(
          book =>
            (!!book.bookReview &&
              reviewStatusSelectedFacets.includes("Has review")) ||
            (!book.bookReview &&
              reviewStatusSelectedFacets.includes("No review"))
        )
      : booksList;
  };

  getBooksWithSelectedCategories = booksList => {
    const allSelectedFacets = this.getSelectedFacets();
    const categoriesSelectedFacets = _.intersection(
      _.map(Library.BookCategory.items, "name"),
      allSelectedFacets
    );

    return categoriesSelectedFacets.length
      ? booksList.filter(book =>
          categoriesSelectedFacets.some(facet =>
            _.get(book, "volumeInfo.categories", []).includes(facet)
          )
        )
      : booksList;
  };

  getBooksFromFacets() {
    if (!this.getSelectedFacets().length) {
      return books;
    }

    const bookList = compose(
      this.getBooksWithSelectedCategories,
      this.getBooksWithSelectedReviewStatus,
      this.getBooksWithSelectedStatuses
    )(books);

    return bookList;
  }

  getBooksFromSearchAndFacets() {
    this.setState(
      this.search(this.state.searchQuery, this.getBooksFromFacets())
    );
  }
}

export default compose(
  decorate({ name }),
  withStyles(styles)
)(Library);
