import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='en' >
      <Head>
      </Head>
      <body className='min-h-screen bg-zinc-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
