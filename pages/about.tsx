import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Back from '../components/Back'

const About: NextPage = () => {

  return (
    <Layout>
        <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.pageTitle} id={styles.aboutHeader}>
            ABOUT
            </h1>
            <span className={styles.largeParagraphText}>
                My name is Albert. I&apos;m a 4th-year Computer Science and Economics 
                student at the University of Toronto. I&apos;m based in Toronto &amp; Vancouver,
                but very open to opportunities in the United States.
            </span>

            <Back/>

        </main>
        </div>
    </Layout>
  )
}

export default About
