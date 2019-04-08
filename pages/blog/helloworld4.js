import React from "react";
import moment from "moment";
import post from "../../blog_posts/helloworld4.json";
import { compose } from "lodash/fp";
import decorate from "../../hoc/decorate";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import assetUrl from "../../utils/assetUrl.js";

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
      <Typography variant="h3" component="h1" align="left">
        {post.name}
      </Typography>
      <Typography
        gutterBottom
        variant="subheading"
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

export default compose(
  decorate({ name: post.name }),
  withStyles(styles)
)(Post);
