import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      <title>Seek Time Calculator</title>
      <meta name="description" content="Visualise and calculate seek times for disk scheduling algorithms FCFS, SSTF, SCAN, CSCAN, LOOK and CLOOK."></meta>
      <Head />
      <body>
        <Main />
        <NextScript />
        {
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
