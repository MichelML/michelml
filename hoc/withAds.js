import Head from "next/head";
import assetUrl from "../utils/assetUrl";

const withAds = () => Component => {
  return function(props) {
    return (
      <>
        <Head>
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script src={assetUrl("static/google_ads.js")} />
        </Head>
        <Component {...props} />
      </>
    );
  };
};

export default withAds;
