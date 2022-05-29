import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Back from '../components/Back'

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
                My name is Albert. I&apos;m a software engineer
                and a 4th-year Computer Science and Economics 
                student at the University of Toronto. I&apos;m based in Toronto &amp; Vancouver,
                and very open to opportunities in Canada and the United States.
            </span>

            <Back/>

        </main>
        </div>
    </Layout>
  )
}

export default About
