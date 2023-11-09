import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500, 
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-2020%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
        },
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>ANDRE ARANTE</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>My Projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="src/assets/scroll.png" alt=""></motion.img>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                This is a really long and wasteful message so that I can waste as much of your time as possible because you will keep looking at this trying to read the entire message.
            </motion.div>
            <div className="imageContainer">
                <img src="src/assets/hero.png" alt=""/>
            </div> 
        </div>
    )
}

export default Hero;