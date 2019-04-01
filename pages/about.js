import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

function About() {
  return <div>About</div>
}

export default compose(
  withHeader({name: About.name}),
  withHead({name: About.name}),
)(About)