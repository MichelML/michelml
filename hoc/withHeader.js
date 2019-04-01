import HeaderBar from '../components/HeaderBar'

const withHeaderBar = ({name}) => Component => {
  return function (props) {
    return (
      <div>
        <HeaderBar name={name} />
        <Component {...props} />
      </div>
    );
  }
}

export default withHeaderBar
