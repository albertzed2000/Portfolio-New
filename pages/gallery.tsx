/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Back from '../components/Back'
import PhotoAlbum from "react-photo-album";
import { photos } from '../components/Photos'

const Gallery: NextPage = () => {
  const height = 500

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <span className={styles.title}>
          <Back/>
          <span className={styles.pageTitle} id={styles.teal}>
            GALLERY
          </span>
        </span>


        <PhotoAlbum layout='rows' photos={photos} targetRowHeight={height}/>

      </main>
    </div>
  )
}

export default Gallery
