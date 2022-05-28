import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import Back from '../components/Back'

const Work: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.title} id={styles.workHeader}>
          WORK
        </div>

        <VerticalTimeline className={styles.timelineContainer} lineColor="#F79256">

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="Summer 2023 - ???"
          iconStyle={{ background: "#F79256", color: "#fff" }}
          >
            <div className={styles.timelineElementTitle}>
              Your Company
            </div>

            <div className={styles.timelineElementTech}>
                Your company's technologies
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F79256", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F79256" }}
          date="May 2021 - August 2022"
          iconStyle={{ background: "#F79256", color: "#fff" }}
          >
            <div className={styles.timelineElementTitle}>Intern Software Dev, StoneX Financial</div>
            <div className={styles.timelineElementTech}>
              Angular | Java Spring | SQL | Pandas | Docker | Kubernetes
              </div>
          </VerticalTimelineElement>




          </VerticalTimeline>

        <Back/>

      </main>
    </div>
  )
}

export default Work
