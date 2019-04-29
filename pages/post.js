import React from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "lodash/fp";
import _ from "lodash";
import assetUrl from "../utils/assetUrl";
import { rootUrl } from "../utils/env";
import decorate from "../hoc/decorate";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

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
    },
    minHeight: "calc(100vh - 200px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  postImage: {
    minWidth: "100%",
    height: "5px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: theme.spacing.unit * 2
  },
  blogPost: {
    marginTop: theme.spacing.unit * 4
  },
  notFound: {
    marginBottom: theme.spacing.unit * 4
  },
  font: {
    "--x-height-multiplier": 0.375,
    "--baseline-multiplier": 0.17,
    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
    letterSpacing: ".01rem",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: 1.58,
    letterSpacing: "-.003em"
  },
  bodyFont: {
    fontWeight: 500,
    fontSize: "21px"
  }
});

function BlogPost(props) {
  const { classes, post } = props;

  const PostNotFound = () => (
    <div>
      <Head>
        <title>Michel ML - Blog Post Not Found</title>
      </Head>
      <main className={classNames(classes.layout)}>
        <Typography gutterBottom variant="h3" component="h1" align="left">
          Blog Post Not Found.
        </Typography>
        <Typography className={classes.notFound} variant="body1" align="left">
          We were unable to find the requested blog post.
        </Typography>
        <Link href="/blog">
          <Button color="primary">
            <ArrowBackIcon />
            Browse other articles
          </Button>
        </Link>
      </main>
    </div>
  );

  return !post ? (
    <PostNotFound />
  ) : (
    <div>
      <Head>
        <title>Michel ML - {_.startCase(post.name)}</title>
      </Head>
      <div className={classNames(classes.layout)}>
        <article>
          <header>
            <Typography
              variant="h3"
              component="h1"
              align="left"
              className={classes.font}
            >
              {_.startCase(post.name)}
            </Typography>
            <div
              className={classes.postImage}
              style={{ backgroundImage: `url("${assetUrl(post.img)}")` }}
            />
            <Typography
              gutterBottom
              className={classes.font}
              variant="subtitle1"
              component="h6"
              color="textSecondary"
              align="left"
            >
              {post.author} - {moment(post.date).format("MMMM Do YYYY")}
            </Typography>
          </header>
          <main>
            <Typography
              variant="body1"
              align="left"
              className={classNames(classes.font, classes.bodyFont)}
            >
              <div dangerouslySetInnerHTML={{ __html: post.post }} />
            </Typography>
          </main>
        </article>
        <Link href="/blog">
          <Button color="primary">
            <ArrowBackIcon />
            Browse other articles
          </Button>
        </Link>
      </div>
    </div>
  );
}

BlogPost = compose(
  decorate({ name: "Blog Post", ads: true }),
  withStyles(styles)
)(BlogPost);

BlogPost.getInitialProps = async ({ query }) => {
  let post;
  try {
    const response = await fetch(
      `${rootUrl}/static/blogposts/${query.post}.json`
    );
    post = await response.json();
  } catch (e) {
    post = null;
  }

  return { post };
};

export default BlogPost;
