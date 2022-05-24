import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default About
