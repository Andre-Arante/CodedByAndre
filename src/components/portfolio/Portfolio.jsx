import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Conflicts",
        img: "https://i.ibb.co/djfkzB6/conflicts-roadmap.png",
        desc: "\"Conflicts\" is a sophisticated task manager and goal-setting web application that I developed for the 2022 Congressional App Challenge. It combines JavaScript React for the frontend and Django for the backend, allowing users to efficiently organize tasks and set long-term goals. The app offers two main tabs: \"Tasks\" for to-do lists and \"Roadmaps\" for goal tracking. ",
        link: "https://github.com/Andre-Arante/conflicts"
    },
    {
        id: 2,
        title: "Emergency Room Dashboard",
        img: "src/assets/emergency_room_tracking.png",
        desc: "I created a series of impactful Tableau dashboards, including a dynamic emergency room dashboard that tracked over 80,000 annual visits and facillitated efficient staffing of 50 physicians and 200 support staff. This dashboard, which highlighted busy times of day, allowed the department to maintain a targeted 4-hour length of stay, enhancing operational efficiency.",
        link: "https://public.tableau.com/app/profile/andre.arante/vizzes"
    },
    {
        id: 3,
        title: "Ice Cream Tracker",
        img: "src/assets/ice-cream-tracker.png",
        desc: "Frusturated by the constant breakdowns of the Thurston dining hall, my friends and I created a website that tracks the current status of the soft serve machine. Our site relys on user input to report the working status, and incentives users to report via a point and leaderboard system.",
        link: "https://github.com/Andre-Arante/Ice-Cream-Tracker"
    },
    {
        id: 4,
        title: "React Commerce",
        img: "src/assets/expense-tracker.png",
        desc: "Build an expenses tracker that allows users to track how they are spending their money. Also implemented responsive design using Javascript React framework and Javascript logic that prevents the user from spending money that they don't have.",
        link: "https://github.com/Andre-Arante/pyrahacks22/tree/main/expense-tracker"
    }
];

const Single = ({item}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-300%", "300%"]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""></img>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a target="_blank" href={item.link}>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    )
}

export default Portfolio