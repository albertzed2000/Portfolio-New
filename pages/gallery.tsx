/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Back from '../components/Back'
import useSWR from 'swr';

const Gallery: NextPage = () => {
  const height = 500
  let [currIndex, setCurrIndex] = useState(0);
  let [lastPos, setLastPos] = useState({
    x: 0,
    y: 0
  });

  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);
  // console.log(data)
  
  const activate = (image:any, x:any, y:any) => {
    if(image){
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = currIndex
      image.dataset.status = "active";
      setLastPos({x, y})
    }
  }

  const distanceFromLast = (x: any, y: any) => {
    return Math.hypot(x - lastPos.x, y - lastPos.y);
  }

  useEffect(()=>{
    const images = document.getElementsByClassName(styles.galleryImage);



    window.onmousemove = e => {
      if(distanceFromLast(e.clientX, e.clientY) > 100 ){
        const lead = images[currIndex % images.length];
        const tail = images[(currIndex - 5) % images.length];
        activate(lead, e.clientX, e.clientY);
        if (tail){
          tail.setAttribute("data-status", "inactive")
        }
        setCurrIndex(currIndex + 1)
      }
      


      
    }

    // window.onpointermove = e => { // code for enable blur background tracking
    //   let blob = document.getElementById(styles.blob);

    //   if(blob){

    //     // blob.style.left = `${e.clientX}px`
    //     // blob.style.top = `${e.clientY}px`
    //     // console.log(blob.style.right)
    //     blob.animate({
    //       left: `${e.clientX}px`,
    //       top: `${e.clientY}px`
    //     }, { duration: 3000, fill: "forwards" });
    //   }

    // }

  })

  

  return (
    <div className={styles.pageContainer}>
        <span style={{zIndex: 100000}}  className={styles.title}>
          <Back color="#00B2CA"/>
          <span className={styles.pageTitle} id={styles.teal}>
            GALLERY
          </span>
        </span>

      {/* enable blur background follower */}
        {/* <div id={styles.blob}></div>
        <div id={styles.blur}></div> */}
      <div className={styles.galleryContainer}>

          {data  !== undefined ? data.map((photo: any)=>{
          
                    if(photo.width > photo.height){
                      return (<img className={styles.galleryImage} alt='gallery image' key={photo.name} data-index={photo.name} data-status="inactive" 
                      width="550"
                       src={photo.name}></img>)
                    }
                    else{
                      return (<img className={styles.galleryImage} alt='gallery image' key={photo.name} data-index={photo.name} data-status="inactive" 
                      height="550"
                       src={photo.name}></img>)
                    }
                  }) : ""}


      </div>
    </div>
  )
}

export default Gallery
