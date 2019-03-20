import Head from 'next/head'

function Home() {
  const name = 'Home';
  return (
    <div>
      <Head>
        <title>michelml - {name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
    </div>
  );
}

export default withTheme()(Home)