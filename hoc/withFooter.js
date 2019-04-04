import Footer from "../components/Footer";

const withFooter = () => Component => {
  return function(props) {
    return (
      <div>
        <Component {...props} />
        <Footer />
      </div>
    );
  };
};

export default withFooter;
