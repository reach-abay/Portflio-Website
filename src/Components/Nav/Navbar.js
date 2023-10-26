import classes from "./Navbar.module.css";
import insta from "../../resources/instagram.png";
import linkedin from "../../resources/linkedin.png";
import github from "../../resources/github.png";
import SideMenu from "../SideMenu/SideMenu";
import { motion } from "framer-motion";


export default function Navbar() {

    const variants={
      initial:{
        y:-100
      },
      animate:{
        y:0,
        transition:{
          duration:.5
        }
      }
    }

  return (
    <motion.div className={classes.navDiv} variants={variants} initial="initial" animate="animate">
        <SideMenu ></SideMenu>
      <div className={classes.wrapper}>
        <h2>Abay Raju M</h2>
        <div className={classes.socialDiv}>
          <img src={insta} alt=""></img>
          <img src={linkedin} alt=""></img>
          <img src={github} alt=""></img>
        </div>
      </div>
    </motion.div>
  );
}
