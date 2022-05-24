import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
        <Head>
          <title>Albert Zheng</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <footer className={styles.footer}>
          <span className={styles.footerCopyright}>
            Made with 💛 by Albert Zheng © 2022
          </span>
          
          <span className={styles.footerIconsContainer}>
            ICON HYPERLINKS GO HERE
          </span>
      </footer>
  </>)
}

export default MyApp
