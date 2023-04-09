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

  const cardHover = (e : any, zIndex: any) => {
    if(e.target){
      const card = e.target;
      card.style.zIndex = zIndex;
    }
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
            onMouseEnter={(e)=>{setBgColor(COLORS.about); cardHover(e, 1)}}
            onMouseLeave={(e)=>{setBgColor('#ffffff'); cardHover(e, 2)}}
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
            onMouseEnter={(e)=>{setBgColor(COLORS.experience); cardHover(e, 1)}}
            onMouseLeave={(e)=>{setBgColor('#ffffff'); cardHover(e, 2)}}
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
            onMouseEnter={(e)=>{setBgColor(COLORS.gallery); cardHover(e, 1)}}
            onMouseLeave={(e)=>{setBgColor('#ffffff'); cardHover(e, 2)}}
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
            onMouseEnter={(e)=>{setBgColor(COLORS.contact); cardHover(e, 1)}}
            onMouseLeave={(e)=>{setBgColor('#ffffff'); cardHover(e, 2)}}
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
