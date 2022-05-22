import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About me, where you can find everything about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About me!
        </h1>

        <Link
            href="/"
            >
            <a
            className={styles.card}
            >

            <h2>Go Back</h2>
            </a>
          </Link>

      </main>

      <footer className={styles.footer}>
        Copyright Albert Zheng 2022
      </footer>
    </div>
  )
}

export default About
