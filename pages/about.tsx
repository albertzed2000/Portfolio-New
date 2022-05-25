import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title} id={styles.aboutHeader}>
          ABOUT
        </h1> */}

        <span className={styles.largeParagraphText}>
        My name is Albert, and I’m a software engineer
         and a 4th-year Computer Science and Economics 
         student at the University of Toronto.
        </span>

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
