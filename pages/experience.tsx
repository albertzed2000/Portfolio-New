import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import Back from '../components/Back'
import {BiGitBranch} from 'react-icons/bi'
import {BsFileTextFill} from 'react-icons/bs'
import {RiProfileFill} from 'react-icons/ri'
import {FaNpm} from 'react-icons/fa'

const Experience: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.pageTitle} id={styles.experienceHeader}>
          EXPERIENCE
        </div>

        <VerticalTimeline className={styles.timelineContainer} lineColor="#F79256">

        <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="Spring/Summer '23 - ???"
          iconStyle={{ background: "#F79256", color: "#fff" }}
          >
            <div className={styles.timelineElementTitle}>
              Your Company
            </div>

            <div className={styles.timelineElementTech}>
                Your company's technologies
            </div>

            <div className={styles.timelineElementDescription}>
              Connect with me and let's make it happen!
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="May '21 - August '22"
          iconStyle={{ background: "#F79256", color: "#fff" }}
          >
            <div className={styles.timelineElementTitle}>Intern Software Dev, StoneX Financial</div>
            <div className={styles.timelineElementTech}>
              Angular | Java Spring | SQL | Pandas | Docker | Kubernetes | Azure CI/CD
              </div>

            <div className={styles.timelineElementIcons}>
              <a
              href='https://cryptic-taiga-39693.herokuapp.com/landing/landing.html'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <RiProfileFill/>
              </a>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="May '21 - August '22"
          iconStyle={{ background: "#F79256", color: "#fff" }}
          >
            <div className={styles.timelineElementTitle}>
              PrettyLine
            </div>
            <div className={styles.timelineElementTech}>
              Javascript
            </div>
            <div className={styles.timelineElementDescription}>
              Lightweight, customizable JS library for rapid development of beautiful timeline components.
            </div>

            <div className={styles.timelineElementIcons}>
              <a
              href='https://github.com/albertzed2000/prettyLine'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <BiGitBranch/>
              </a>
              <a
              href='https://cryptic-taiga-39693.herokuapp.com/landing/landing.html'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <BsFileTextFill/>
              </a>

              <a
              href='https://www.npmjs.com/package/pretty-line-js'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <FaNpm/>
              </a>
            </div>
          </VerticalTimelineElement>




          </VerticalTimeline>

        <Back/>

      </main>
    </div>
  )
}

export default Experience
