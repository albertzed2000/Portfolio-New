import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const About: NextPage = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    
  return (
    <Layout>
        <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title} id={styles.aboutHeader}>
            ABOUT
            </h1>
            <span className={styles.largeParagraphText}>
                My name is Albert. I’m a software engineer
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
    </Layout>
  )
}

export default About
