import Link from "next/link"
import styles from '../styles/Home.module.css'
import { useEffect } from "react"

const Back = (props: any) => {
  const {color} = props


  const hoverIn = (e:any) => {
    const back = e.target
    if(back && color){
        back.style.color = color
    }
  }

  const hoverOut = (e: any) => {
    const back = e.target
    if(back && color){
      if(back && color){
        back.style.color = "black"
    }
    }
  }
  return (

    <Link
    style={{zIndex: 100000}}
    href="/"
    className={styles.back}
    id={styles.backHoverId}
    >
    <a className={styles.backText}
      onMouseEnter={(e)=>{hoverIn(e)}}
      onMouseLeave={(e)=>{hoverOut(e)}}
    >
    <span 
    >BACK</span>
    </a>
  </Link>
)
}

export default Back