import Head from 'next/head'
import GlobalStyles from '../styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maycon Alves</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Site pessoal e blog de um desenvolvedor frontend que curte muito escrever e compartilhar conhecimento"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#1f1b24" />
        <meta name="msapplication-TileColor" content="#1f1b24" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index" />
        <meta name="author" content="Maycon Alves" />
        <meta name="creator" content="Maycon Alves" />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maycon Alves" />
        <meta property="og:site_name" content="Maycon Alves" />
        <meta
          name="google-site-verification"
          content="wvyelTEymFd6wrEuf2jWVEX3Icbw1mTrEoBm4c9FkZ8"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
