import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Back from '../components/Back'

const Gallery: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.pageTitle} id={styles.galleryHeader}>
          GALLERY
        </h1>

        <Back/>
      </main>
    </div>
  )
}

export default Gallery
