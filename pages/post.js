import React from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "lodash/fp";
import _ from "lodash";
import assetUrl from "../utils/assetUrl";
import decorate from "../hoc/decorate";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import Link from "next/link";
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
  postImage: {
    minWidth: "100%",
    height: "120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: theme.spacing.unit * 2
  },
  blogPost: {
    marginTop: theme.spacing.unit * 4
  },
  notFound: {
    marginBottom: theme.spacing.unit * 4
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
      <article className={classNames(classes.layout)}>
        <div
          className={classes.postImage}
          style={{ backgroundImage: `url("${assetUrl(post.img)}")` }}
        />
        <Typography variant="h3" component="h1" align="left">
          {_.startCase(post.name)}
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
        <Link href="/blog">
          <Button color="primary">
            <ArrowBackIcon />
            Browse other articles
          </Button>
        </Link>
      </article>
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
    post = await require(`../blog_posts/${query.post}.json`);
  } catch (e) {
    post = null;
  }
  return { post };
};

export default BlogPost;
