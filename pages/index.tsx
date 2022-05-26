import type { NextPage } from 'next'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <Layout>
    <div className={styles.container}>

      <main className={styles.main}>
        <p></p>
        <div className={styles.grid}>
          <Link
            href="/about"
            >
            <a
            className={styles.card}
            id={styles.aboutCard}
            >

            <h2>ABOUT</h2>
            </a>
          </Link>

          <Link
            href="/work"
            >
            <a
            className={styles.card}
            id={styles.workCard}
            >

            <h2>WORK</h2>
            </a>
          </Link>

          <Link
            href="/gallery"
            >
            <a
            className={styles.card}
            id={styles.galleryCard}
            >

            <h2>GALLERY</h2>
            </a>
          </Link>

          <Link
            href="/contact"
            >
            <a
            className={styles.card}
            id={styles.contactCard}
            >

            <h2>CONTACT</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
    </Layout>
  )
}

export default Home
