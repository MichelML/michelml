import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

function Books() {
  return <div>Books</div>
}

export default compose(
  withHeader({name: Books.name}),
  withHead({name: Books.name}),
)(Books)