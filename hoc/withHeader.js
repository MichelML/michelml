import HeaderBar from "../components/HeaderBar";

const withHeaderBar = ({ activeName }) => Component => {
  return function(props) {
    return (
      <div>
        <HeaderBar activeName={activeName} />
        <Component {...props} />
      </div>
    );
  };
};

export default withHeaderBar;
