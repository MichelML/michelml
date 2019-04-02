import Head from "next/head";

const GenericHead = ({name}) => (
  <Head>
    <title>Michel ML - {name}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png"/>
    <link rel="manifest" href="static/favicons/site.webmanifest"/>
    <link rel="mask-icon" href="static/favicons/safari-pinned-tab.svg" color="#0078d7"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="theme-color" content="#fff"/>
    <link rel="stylesheet" href="static/normalize.css"/>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
  </Head>
);

export default GenericHead;
