import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

function Blog() {
  return <div>Blog</div>
}

export default compose(
  withHeader({name: Blog.name}),
  withHead({name: Blog.name}),
)(Blog)