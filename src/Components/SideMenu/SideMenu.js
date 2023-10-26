import classes from "./SideMenu.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
            staggerChildren:0.2 //when  the children get any varients, they are executed one after the other
        }
        
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.2,
        type:"spring",
        stiffness:400,
        damping:35,
        staggerChildren:0.1,
        staggerDirection:-1

      }
    },
  };


  const itemVariant={
    open:{
        opacity:1,
        y:0
        },
    closed:{
       opacity:0,
       y:30

        }
  } 

  return (
    <motion.div className={classes.sideMenu} animate={open ? "open" : "closed"}>
      <motion.div className={classes.options} variants={variants}>

        <motion.a href='#Intro' variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:.9}}>Home</motion.a>
        <motion.a href='#Education' variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:.9}}>Education</motion.a>
        <motion.a href='#Certificates' variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:.9}}>Certificates</motion.a>
        <motion.a href='#Projects' variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:.9}}>Projects</motion.a>
        <motion.a href='#Contact' variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:.9}}> Contact</motion.a>



      </motion.div>

      <button className={classes.menuButton} onClick={() => {setOpen((prev) => !prev);}}> 



      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path d="M5 9L32.6033 9" stroke="black" strokeWidth="4" strokeLinecap="round"  variants={{
    open:{d:"M2 2L28.1629 28.1629"},
    closed:{d:"M5 9L32.6033 9"}
}}/>

<motion.path d="M5 19L32.6033 19" stroke="black" strokeWidth="4" strokeLinecap="round"  variants={{
    open:{opacity:0},
    closed:{opacity:1}
}}/>

<motion.path d="M5 29L32.6033 29" stroke="black" strokeWidth="4" strokeLinecap="round"  variants={{
    open:{d:"M2 28.1629L28.1629 2"},
    closed:{d:"M5 29L32.6033 29"}
}}/>

</svg>

      




      
       </button>

    </motion.div>
  );
}
