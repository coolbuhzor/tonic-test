import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            as="font"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
            as="font"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            as="font"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            as="font"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            as="font"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
