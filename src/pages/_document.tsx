import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Seek Time Calculator</title>
      <meta name="description" content="Visualise and calculate seek times for disk scheduling algorithms FCFS, SSTF, SCAN, CSCAN, LOOK and CLOOK."></meta>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
