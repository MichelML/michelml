import Head from 'next/head'
import HeaderBar from '../components/HeaderBar';

function Home() {
  const name = 'Home';
  return (
    <div>
      <Head>
        <title>Michel ML - {name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="stylesheet" href="static/normalize.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Head>
      <HeaderBar />
    </div>
  );
}

export default Home