import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Work: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work</title>
        <meta name="description" content="Here are some of the projects and work experiences I've been part of." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Work
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

export default Work
