import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Back from '../components/Back'

const About: NextPage = () => {

  return (
    <Layout>
        <div className={styles.pageContainer}>
        <span className={styles.title}>
          <span className={styles.pageTitle} id={styles.purple}>
            ABOUT
          </span>
        </span>
            <span className={styles.largeParagraphText}>
                My name is Albert Zheng. I&apos;m a 
                <span className={styles.strongParagraph} id={styles.orange}> University of Toronto</span> graduate.
                 I&apos;m in 
                <span className={styles.strongParagraph} id={styles.teal}> Boston. </span>
                 
            </span>

            <span className={styles.largeParagraphText}>
                I am <span className={styles.strongParagraph} id={styles.orange}>energetic</span>, <span className={styles.strongParagraph} id={styles.teal}>optimistic</span>, &amp; <span className={styles.strongParagraph} id={styles.lime}>expressive</span>.
            </span>

            <span className={styles.largeParagraphText}>
                My interests include <span className={styles.strongParagraph} id={styles.orange}>running</span>, <span className={styles.strongParagraph} id={styles.teal}>cooking</span>, &amp; <span className={styles.strongParagraph} id={styles.lime}>skateboarding</span>.
            </span>


            <Back/>
        </div>
    </Layout>
  )
}

export default About
