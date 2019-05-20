import Head from "next/head";
import assetUrl from "../utils/assetUrl";
import googlesignin from "../googlesignin_credentials.json";

const GenericHead = ({ name }) => (
  <Head>
    <title>Michel ML - {name}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <meta
      name="google-site-verification"
      content="S9UTYiRQAD8MXS11BmWxrLieSJDhDTJjncrEPbUP4VA"
    />
    <meta
      name="google-signin-client_id"
      content={`${googlesignin.web.client_id}.apps.googleusercontent.com`}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={assetUrl("static/favicons/apple-touch-icon.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={assetUrl("static/favicons/favicon-32x32.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={assetUrl("static/favicons/favicon-16x16.png")}
    />
    <link rel="manifest" href={assetUrl("static/favicons/site.webmanifest")} />
    <link
      rel="mask-icon"
      href={assetUrl("static/favicons/safari-pinned-tab.svg")}
      color="#0078d7"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="theme-color" content="#fff" />
    <link rel="preload" href={assetUrl("static/styles.css")} as="style" />
    <link rel="stylesheet" href={assetUrl("static/styles.css")} />
    {/* Google Analytics */}
    <script
      defer
      src="https://www.googletagmanager.com/gtag/js?id=UA-138306187-1"
    />
    <script src={assetUrl("static/google_analytics.js")} />
    {/* Google Signin */}
    <script src="https://apis.google.com/js/platform.js" async defer />
    <script src={assetUrl("static/google_signin.js")} />
    {/* Firebase */}
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js" />
    <script src={assetUrl("static/google_firebase.js")} />
  </Head>
);

export default GenericHead;
