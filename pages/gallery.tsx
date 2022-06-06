import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Back from '../components/Back'
import PhotoAlbum from "react-photo-album";

const Gallery: NextPage = () => {
  const height = 500
  const photos = [{
    src: '/gallery/forgive.jpg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/avo.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/double.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/cullen.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/fish.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/flick.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/food.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/piu.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/seafood.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/selfie1.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/selfie2.jpeg',
    width: 3024,
    height: 4032
  },

  {
    src: '/gallery/sk8.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/strava.png',
    width: 1284,
    height: 2778
  },
  {
    src: '/gallery/thrift.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/turkish.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/watermelon2.jpeg',
    width: 3024,
    height: 4032
  },
  {
    src: '/gallery/watermelone.jpeg',
    width: 3024,
    height: 4032
  },
]

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.pageTitle} id={styles.galleryHeader}>
          GALLERY
        </h1>

        <PhotoAlbum layout='rows' photos={photos} targetRowHeight={height}/>

        <Back/>
      </main>
    </div>
  )
}

export default Gallery
