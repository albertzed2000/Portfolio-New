import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://zhengalb.com${router.route}` // the url of our site
  return (<>
        <Head>
          <title>Albert Zheng</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <AnimatePresence exitBeforeEnter initial={false} onExitComplete={()=>window.scrollTo(0, 0)} >
          <Layout key={url}>
            <Component {...pageProps}/>
          </Layout>
        </AnimatePresence>

        <Footer/>
  </>)
}

export default MyApp
