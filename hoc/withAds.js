import Head from "next/head";

const withAds = () => Component => {
  return function(props) {
    return (
      <>
        <Head>
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-9748577522484039", enable_page_level_ads: true });`
            }}
          />
        </Head>
        <Component {...props} />
      </>
    );
  };
};

export default withAds;
