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
import WorkIcon from '@mui/icons-material/Work'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Experience: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <span className={styles.title}>
          <span className={styles.pageTitle} id={styles.orange}>
            EXPERIENCE
          </span>
        </span>

        <VerticalTimeline className={styles.timelineContainer} lineColor="#F79256">


          <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="May '21 - August '22"
          iconStyle={{ background: "#F79256", color: "#000" }}
          icon={<WorkIcon/>}
          >
            <div className={styles.timelineElementTitle}>Intern Software Dev, StoneX Financial</div>
            <div className={styles.timelineElementTech}>
              Angular | Java Spring | SQL | Pandas | Docker | Kubernetes | Azure CI/CD
              </div>

            <div className={styles.timelineElementIcons}>
              <a
              href='https://www.stonex.com/'
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
          date="December '20"
          iconStyle={{ background: "#F79256", color: "#000" }}
          icon={<TipsAndUpdatesIcon/>}
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

          <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="September '20"
          iconStyle={{ background: "#F79256", color: "#000" }}
          icon={<TipsAndUpdatesIcon/>}
          >
            <div className={styles.timelineElementTitle}>
              PokeRec
            </div>
            <div className={styles.timelineElementTech}>
              React Native
            </div>
            <div className={styles.timelineElementDescription}>
              Take a picture of a Pokemon card and instantly retrieve its
              approximate sale value. 3rd place at Oakhacks 2020.
            </div>

            <div className={styles.timelineElementIcons}>
              <a
              href='https://github.com/albertzed2000/PokeRec'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <BiGitBranch/>
              </a>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className={styles.timelineElement}
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="August '20"
          iconStyle={{ background: "#F79256", color: "#000" }}
          icon={<TipsAndUpdatesIcon/>}
          >
            <div className={styles.timelineElementTitle}>
              LoLStats
            </div>
            <div className={styles.timelineElementTech}>
              React | AWS Lambda &amp; Api Gateway | Node | MongoDB | Express
            </div>
            <div className={styles.timelineElementDescription}>
              Retrieve the aggregated stats of any player in the popular multiplayer game League of Legends, using
              the Riot Games API.
            </div>

            <div className={styles.timelineElementIcons}>
              <a
              href='https://github.com/albertzed2000/LolStats-New'
              target='blank'
              className={styles.timelineElementIcon}
              >
                <BiGitBranch/>
              </a>
            </div>
          </VerticalTimelineElement>

          </VerticalTimeline>

        <Back color="#F79256"/>
    </div>
  )
}

export default Experience
