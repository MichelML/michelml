import Head from "next/head";

const GenericHead = ({ name }) => (
  <Head>
    <title>Michel ML - {name}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="theme-color" content="#fff" />
    <link rel="stylesheet" href="static/normalize.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
  </Head>
);

export default GenericHead;
