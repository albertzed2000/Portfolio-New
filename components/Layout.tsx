import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0},
  }

// this component controls the enter and exit animations of all pages.
// note that enter+exit will take duration * 2 as long.
const Layout = ({ children}: Props): JSX.Element => (
    <div>
        <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration: 0.15}}
        variants={variants}
        >
            {children}
        </motion.main>
    </div>
)

export default Layout