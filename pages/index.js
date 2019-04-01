import {compose} from 'lodash/fp'
import withHead from '../hoc/withHead'
import withHeader from '../hoc/withHeader'

function Home() {
  return (
    <div>
      Home
    </div>
  );
}

export default compose(
  withHeader({name: Home.name}),
  withHead({name: Home.name}),
)(Home)