import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Back from '../components/Back'

import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {FaToiletPaper} from 'react-icons/fa'

const Contact: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <span className={styles.title}>
          <span className={styles.pageTitle} id={styles.lime}>
            CONTACT
          </span>
        </span>

        <div className={styles.contactIcons}>

          <a href='https://github.com/albertzed2000' target='blank'>
          <AiFillGithub/>
          </a>

          <a href='https://www.linkedin.com/in/albertzed/' target='blank'>
          <AiFillLinkedin/>
          </a>

          <a href='mailto:mralbertzheng@gmail.com' target='blank'>
          <AiFillMail/>
          </a>

          <a href='https://drive.google.com/file/d/1UiSaKY1HgD1ayzoK8QDWVDTAIjo0lBpu/view?usp=sharing' target='blank'>
          <FaToiletPaper/>
          </a>


        </div>

        <Back/>
    </div>
  )
}

export default Contact
