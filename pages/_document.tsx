import Document, { NextDocumentContext } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Retrieve styles from components in the page
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Passing styles as a prop
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
