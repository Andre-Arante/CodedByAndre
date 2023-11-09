import "./parallax.scss"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

    return (
        <div ref={ref} className="parallax" style={{
            background: 
                type==="services" 
                    ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                    : "linear-gradient(180deg, #111132, #505064)",
                }}>
            <motion.div style={{ x: yBg }} className="stars"></motion.div> 
            <motion.img className="city" src="https://i.ibb.co/gRBhHmK/background.png"></motion.img>
            <motion.h1 style={{ y: yText }}>{type==="services" ? "Who am I?" : "What have I created?"}</motion.h1>
        </div>
    )
}

export default Parallax