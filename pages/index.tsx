import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction!</title>
        <meta name="description" content="Homepage and landing page for Albert Zheng's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.grid}>
          <Link
            href="/about"
            >
            <a
            className={styles.card}
            id={styles.aboutCard}
            >

            <h2>About</h2>
            </a>
          </Link>

          <Link
            href="/work"
            >
            <a
            className={styles.card}
            id={styles.workCard}
            >

            <h2>Work</h2>
            </a>
          </Link>

          <Link
            href="/gallery"
            >
            <a
            className={styles.card}
            id={styles.galleryCard}
            >

            <h2>Gallery</h2>
            </a>
          </Link>

          <Link
            href="/contact"
            >
            <a
            className={styles.card}
            id={styles.contactCard}
            >

            <h2>Reach me</h2>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
      Made with 💛 by Albert Zheng © 2022
      </footer>
    </div>
  )
}

export default Home
