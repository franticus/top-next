/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import React from 'react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top - Our Best Top</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
