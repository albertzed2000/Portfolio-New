/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Back from '../components/Back'
import PhotoAlbum from "react-photo-album";
import { photos } from '../components/Photos'

const Gallery: NextPage = () => {
  const height = 500
  let [currIndex, setCurrIndex] = useState(0);
  let [lastPos, setLastPos] = useState({
    x: 0,
    y: 0
  });
  
  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    image.dataset.status = "active";
    setLastPos({x, y})
  }

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - lastPos.x, y - lastPos.y);
  }

  useEffect(()=>{
    const images = document.getElementsByClassName(styles.galleryImage);
    
    window.onmousemove = e => {
      if(distanceFromLast(e.clientX, e.clientY) > 100 && (e.clientX > 600 || e.clientY > 450)){
        const lead = images[currIndex % images.length];
        const tail = images[(currIndex - 7) % images.length];
        activate(lead, e.clientX, e.clientY);
        if (tail){
          tail.dataset.status = "inactive"
        }
        setCurrIndex(currIndex + 1)
      }
    }

  })

  

  return (
    <div className={styles.pageContainer}>
        <span className={styles.title}>
          <Back/>
          <span className={styles.pageTitle} id={styles.teal}>
            GALLERY
          </span>
        </span>

      <div className={styles.galleryContainer}>
        {photos.map((photo, index)=>{
          return (<img className={styles.galleryImage} key={index} data-index={index.toString()} data-status="inactive" width={photos[index].width} height={photos[index].height} src={photos[index].src}></img>)
        })}
      </div>

        {/* <PhotoAlbum layout='rows' photos={photos} targetRowHeight={height}/> */}
    </div>
  )
}

export default Gallery
