import classes from "./Navbar.module.css";
import insta from "../../resources/instagram.png";
import linkedin from "../../resources/linkedin.png";
import github from "../../resources/github.png";
import SideMenu from "../SideMenu/SideMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  const variants = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={classes.navDiv}
      variants={variants}
      initial="initial"
      animate="animate"
    >
     <SideMenu></SideMenu>
      <div className={classes.wrapper}>
        <h2 className={classes.name}>Abay Raju M</h2>
        <div className={classes.socialDiv}>
          <a href='https://instagram.com/puzzled.potato?igshid=NGVhN2U2NjQ0Yg=='  target='_blank'>
            <img src={insta} alt=""></img>
          </a>
          <a href='https://www.linkedin.com/in/reach-abay-raju-m/' target='_blank'>
            <img src={linkedin} alt=""></img>
          </a>
          <a href='https://github.com/reach-abay' target='_blank'>
            <img src={github} alt=""></img>
          </a>

        </div>
      </div>
    </motion.div>
  );
}
