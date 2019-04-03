import PageLoad from "../components/PageLoad";

const withPageLoad = () => Component => {
  return function(props) {
    return (
      <div>
        <PageLoad />
        <Component {...props} />
      </div>
    );
  };
};

export default withPageLoad;
