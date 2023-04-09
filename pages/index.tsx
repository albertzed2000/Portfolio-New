import type { NextPage } from 'next'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from 'react'

const COLORS = {
  'default': '#ffffff',
  'about': '#89608E',
  'experience': '#F79256',
  'gallery': '#00B2CA',
  'contact': '#9BC53D'

}

const Home: NextPage = () => {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const [darkState, setDarkState] = useState(
    {
      darkMode: false
    }
  );

  const [bgColor, setBgColor] = useState ('#ffffff')

  const changeDarkStateHandler = () => {
    setDarkState({
      darkMode: !darkState.darkMode
    })
  }


  // let darkMode = false;

  return (
    <Layout>
    <div className={darkState.darkMode ? styles.darkContainer : styles.container} style={{backgroundColor: bgColor}}>
      <main className={styles.main} style={{backgroundColor: bgColor}}>
        {/* <button onClick={changeDarkStateHandler}>TOGGLE DARKMODE</button> */}
        <div style={{backgroundColor: bgColor}} className={darkState.darkMode ? styles.darkGrid : styles.grid}>
          <Link
            href="/about"
            >
            <a
            className={styles.card}
            id={styles.aboutCard}
            onMouseEnter={()=>{setBgColor(COLORS.about)}}
            onMouseLeave={()=>{setBgColor('#ffffff')}}
            >

            <h1>ABOUT</h1>
            </a>
          </Link>

          <Link
            href="/experience"
            >
            <a
            className={styles.card}
            id={styles.experienceCard}
            onMouseEnter={()=>{setBgColor(COLORS.experience)}}
            onMouseLeave={()=>{setBgColor('#ffffff')}}
            >

            <h1>EXPERIENCE</h1>
            </a>
          </Link>

          <Link
            href="/gallery"
            >
            <a
            className={styles.card}
            id={styles.galleryCard}
            onMouseEnter={()=>{setBgColor(COLORS.gallery)}}
            onMouseLeave={()=>{setBgColor('#ffffff')}}
            >

            <h1>GALLERY</h1>
            </a>
          </Link>

          <Link
            href="/contact"
            >
            <a
            className={styles.card}
            id={styles.contactCard}
            onMouseEnter={()=>{setBgColor(COLORS.contact)}}
            onMouseLeave={()=>{setBgColor('#ffffff')}}
            >

            <h1>CONTACT</h1>
            </a>
          </Link>

        </div>
      </main>
    </div>
    </Layout>
  )
}

export default Home
