/* eslint-disable react/display-name */
import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {


  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
