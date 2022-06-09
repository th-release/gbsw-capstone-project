import '../styles/globals.css'
import '../styles/loading.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps ){
  return (
    <>
      <Head>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/935776183688245341/984103751575015464/27f7ec60fd612f1e.jpg"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
