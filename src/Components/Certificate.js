import classes from "../sections/Certificates.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ImagePopUp from "./ImagePopUp";

export default function (props) {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px 0px -50px 0px" });
  const [openImage, setOpenImage] = useState(false);
  function trigger(){
    setOpenImage((prev) => !prev);
  }

  return (
    <motion.div
      ref={ref}
      className={classes.item}
      initial={{ opacity: 0,y:-20 }}
      animate={isInView ? { opacity: 1,y:0 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      /*whileTap={{ scale: 1.05 }}*/
      onClick={trigger}
    >
      <img className={classes.certificateImage} src={props.data.image} alt="" />
      <div className={classes.title}>{props.data.title}</div>

      {openImage?<ImagePopUp trigger={trigger} image={props.data.image}></ImagePopUp>:""}
    </motion.div>
  );
}
