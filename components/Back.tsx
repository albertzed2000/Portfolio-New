import Link from "next/link"
import styles from '../styles/Home.module.css'


const Back = (): JSX.Element => {
  return (

    <Link
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