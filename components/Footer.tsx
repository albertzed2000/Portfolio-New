import styles from '../styles/Home.module.css'

const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <span className={styles.footerCopyright}>
            Albert Zheng © 2022
        </span>
          
        <span className={styles.footerIconsContainer}>
            ICON HYPERLINKS GO HERE
        </span>
    </footer>
)

export default Footer