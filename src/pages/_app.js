import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maycon Alves</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
