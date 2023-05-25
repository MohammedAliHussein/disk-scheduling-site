import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { env } from 'process'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Seek Time Calculator</title>
      <meta name="description" content="Visualise and calculate seek times for disk scheduling algorithms FCFS, SSTF, SCAN, CSCAN, LOOK and CLOOK."></meta>
      <body>
        <Main />
        <NextScript />
        {
          process.env.MODE !== 'dev'
          &&
          <>
            <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-CV1QCHS4G2"></Script>
            <Script id='ga-tracking' strategy='afterInteractive'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-CV1QCHS4G2');
              `}
            </Script>
          </>
        }
      </body>
    </Html>
  )
}
