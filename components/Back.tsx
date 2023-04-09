import Link from "next/link"
import styles from '../styles/Home.module.css'
import zIndex from "@mui/material/styles/zIndex"


const Back = (): JSX.Element => {
  return (

    <Link
    style={{zIndex: 100000}}
    href="/"
    className={styles.back}
    >
    <a className={styles.backText}
    >
    <span 
    >BACK</span>
    </a>
  </Link>
)
}

export default Back