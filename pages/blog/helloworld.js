import React from "react";
import post from "../../blog_posts/helloworld.json";
import { compose } from "lodash/fp";
import decorate from "../../hoc/decorate";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import assetUrl from "../../utils/assetUrl.js";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4
  },
  postImage: {
    minWidth: "100%",
    height: "120px",
    backgroundImage: `url("${assetUrl(post.img)}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: theme.spacing.unit * 2
  },
  blogPost: {
    marginTop: theme.spacing.unit * 4
  }
});

function Post(props) {
  const { classes } = props;
  return (
    <article className={classNames(classes.layout)}>
      <div className={classes.postImage} />
      <div>
        <Typography variant="h3" component="h1" align="left">
          {post.name}
        </Typography>
      </div>

      <Typography
        variant="body1"
        align="left"
        dangerouslySetInnerHTML={{ __html: post.post }}
      />
    </article>
  );
}

export default compose(
  decorate({ name: post.name }),
  withStyles(styles)
)(Post);
