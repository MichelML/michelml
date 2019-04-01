import GenericHead from '../components/GenericHead'

const withHead = ({name}) => component => {
  return class ComponentWithHead extends React.Component {
    render() {
      return (
        <div>
          <GenericHead name={name} />
          <component {...this.props} />
        </div>
      );
    }
  }
};

export default withHead
