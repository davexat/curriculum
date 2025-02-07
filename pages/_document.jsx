import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="web development, python, javascript, backend, frontend, programming, software design, software development, software engineering, computer science, engineering"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Software and Web developer excited about AI"
          />
          <meta name="author" content="David Sandoval" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
