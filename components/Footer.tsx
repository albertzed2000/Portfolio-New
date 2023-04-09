import styles from '../styles/Home.module.css'
import {useState} from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {FaToiletPaper} from 'react-icons/fa'

const Footer = () => {
    if(typeof window !== 'undefined'){
        if(window.location.pathname == "/gallery"){
            return (<span></span>)
        }

    }

    let [currText, setCurrText] = useState("");


    return(
    <footer className={styles.footer}>
        <span className={styles.footerCopyright}>
            Albert Zheng © 2023
        </span>
          
        <span className={styles.footerIconsContainer}>

            <a onMouseEnter={()=>{setCurrText("GITHUB")}}
            onMouseLeave={()=>{setCurrText("")}}
            id={styles.footerGithubIcon} href='https://github.com/albertzed2000' target='blank'>
            <AiFillGithub/>
            </a>

            <a onMouseEnter={()=>{setCurrText("LINKEDIN")}}
            onMouseLeave={()=>{setCurrText("")}}
            id={styles.footerLinkedinIcon} href='https://www.linkedin.com/in/albertzed/' target='blank'>
            <AiFillLinkedin/>
            </a>

            <a onMouseEnter={()=>{setCurrText("EMAIL")}}
            onMouseLeave={()=>{setCurrText("")}}
            id={styles.footerMailIcon} href='mailto:mralbertzheng@gmail.com' target='blank'>
            <AiFillMail/>
            </a>

            <a onMouseEnter={()=>{setCurrText("RESUME")}}
            onMouseLeave={()=>{setCurrText("")}}
            id={styles.footerResumeIcon} href='https://drive.google.com/file/d/1UiSaKY1HgD1ayzoK8QDWVDTAIjo0lBpu/view?usp=sharing' target='blank'>
            <FaToiletPaper/>
            </a>

            <div className={styles.footerIconsAltText}>{currText}</div>


        </span>
    </footer>

    )

    }

export default Footer