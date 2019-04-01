import GenericHead from '../components/GenericHead'

const withHead = ({name}) => Component => {
  return function (props) {
    return (
      <div>
        <GenericHead name={name}/>
        <Component {...props}/>
      </div>
    );
  }
}

export default withHead
