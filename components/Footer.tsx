import styles from '../styles/Home.module.css'

import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {FaToiletPaper} from 'react-icons/fa'

const Footer = () => {

    if(window && window.location.pathname == "/gallery"){
        return (<span></span>)
    }
    return(
    <footer className={styles.footer}>
        <span className={styles.footerCopyright}>
            Albert Zheng © 2022
        </span>
          
        <span className={styles.footerIconsContainer}>

            <a id={styles.footerGithubIcon} href='https://github.com/albertzed2000' target='blank'>
            <AiFillGithub/>
            </a>

            <a id={styles.footerLinkedinIcon} href='https://www.linkedin.com/in/albertzed/' target='blank'>
            <AiFillLinkedin/>
            </a>

            <a id={styles.footerMailIcon} href='mailto:mralbertzheng@gmail.com' target='blank'>
            <AiFillMail/>
            </a>

            <a id={styles.footerResumeIcon} href='https://drive.google.com/file/d/1UiSaKY1HgD1ayzoK8QDWVDTAIjo0lBpu/view?usp=sharing' target='blank'>
            <FaToiletPaper/>
            </a>


        </span>
    </footer>

    )

    }

export default Footer