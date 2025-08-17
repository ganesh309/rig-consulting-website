import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html {
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: transparent;
              height: 100%;
              box-sizing: border-box;
              text-size-adjust: 100%;
            }
            
            *, *::before, *::after {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }
            
            body {
              margin: 0;
              padding: 0;
              min-height: 100%;
              width: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              line-height: 1.5;
            }
            
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              width: 100%;
            }
            
            /* Reset form elements */
            button, input, optgroup, select, textarea {
              font-family: inherit;
              font-size: 100%;
              line-height: 1.15;
              margin: 0;
            }
            
            /* Remove default button styling */
            button, input {
              overflow: visible;
            }
            
            /* Remove inner border and padding from Firefox */
            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
              border-style: none;
              padding: 0;
            }
            
            /* Remove default focus styles */
            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
              outline: 1px dotted ButtonText;
            }
          `
        }} />
      </Head>
      <body className="min-h-screen w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
