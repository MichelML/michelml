import React from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "lodash/fp";
import assetUrl from "../utils/assetUrl";
import { withRouter } from "next/router";
import decorate from "../hoc/decorate";
import urlJoin from "url-join";

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
  postImage: {
    minWidth: "100%",
    height: "120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: theme.spacing.unit * 2
  },
  blogPost: {
    marginTop: theme.spacing.unit * 4
  }
});

class BlogPost extends React.Component {
  state = {
    post: null
  };

  async componentDidMount() {
    try {
      const post = await require(`../blog_posts/${
        this.props.router.query.post
      }.json`);
      this.setState({ post });
    } catch (e) {
      this.props.router.replace(urlJoin(location.origin, "404"));
    }
  }

  render() {
    const { classes } = this.props;
    const { post } = this.state;
    return post && (
      <article className={classNames(classes.layout)}>
        <div
          className={classes.postImage}
          style={{ backgroundImage: `url("${assetUrl(post.img)}")` }}
        />
        <Typography variant="h3" component="h1" align="left">
          {post.name}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h6"
          color="textSecondary"
          align="left"
        >
          {post.author} - {moment(post.date).format("MMMM Do YYYY")}
        </Typography>
        <Typography
          variant="body1"
          align="left"
          dangerouslySetInnerHTML={{ __html: post.post }}
        />
      </article>
    );
  }
}

export default compose(
  withRouter,
  decorate({ name: "Blog Post" }),
  withStyles(styles)
)(BlogPost);
