import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html className="bg-black">
        <Head>
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}