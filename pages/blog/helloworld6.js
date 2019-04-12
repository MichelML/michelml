import BlogPost from "../../components/BlogPost";
import post from "../../blog_posts/helloworld6.json";
import React from "react";
import { compose } from "lodash/fp";
import decorate from "../../hoc/decorate";

function Post() {
  return <BlogPost post={post} />
}

export default compose(
  decorate({ name: post.name }),
)(Post);
