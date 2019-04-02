import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

const name = "About"

function About() {
  return <div>About</div>
}

export default compose(
  withHeader({name}),
  withHead({name}),
)(About)