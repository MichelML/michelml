import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

const name = "Blog"

function Blog() {
  return <div>Blog</div>
}

export default compose(
  withHeader({name}),
  withHead({name}),
)(Blog)