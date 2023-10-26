import classes from "./Hero.module.css";
import hero from "../../resources/hero.png";
import scroll from "../../resources/scroll.png";
import { motion } from "framer-motion";


export default function Hero() {

const textVariants={
    initial:{
      x:-500,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1
      }
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:99999,
      }
    }
  }

  const scrollTextVariant={
    initial:{
      x:"5%",
    },
    animate:{
      x:"-40%",
      transition:{
        type:"spring",
        damping:0,
        stiffness:5,
        mass:100
      }
    },
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.wrapper}>
        
      <motion.div className={classes.scrollText} variants={scrollTextVariant} initial="initial" animate="animate" >
          C, C++, SQL, Java, HTML, CSS, ReactJS, .Net C#, Machine Learning
          </motion.div>


        <motion.div className={classes.contentWrapper} variants={textVariants} initial="initial" animate="animate">
          <motion.h2  className={classes.h2Content}>ABAY RAJU M</motion.h2>
          <motion.h1  className={classes.h1Content}>Web Developer <br/> Android Developer</motion.h1>
          <motion.div>
            <motion.a  className={classes.button} href='#Projects'>See my Works</motion.a>
            <motion.a  className={classes.button} href='#Contact'>Get in Touch</motion.a>
          </motion.div>
          <motion.img className={classes.scrollImage} variants={textVariants} animate="scrollButton" src={scroll} alt=""/>
        </motion.div>


        <div className={classes.imageDiv}>
          <img className={classes.image} src={hero} alt=""></img>
        </div>

      </div>
    </div>
  );
}
