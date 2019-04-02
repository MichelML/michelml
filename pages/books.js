import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

const name = "Books"

function Books() {
  return <div>Books</div>
}

export default compose(
  withHeader({name}),
  withHead({name}),
)(Books)