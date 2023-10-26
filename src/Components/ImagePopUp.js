import classes from "./ImagePopUp.module.css";
import { motion } from "framer-motion";

export default function (props) {
  return (
    <motion.div
      className={classes.bg}
      onClick={(e) => {
        e.stopPropagation();
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      whileTap={{opacity: .8, x: 100,transition:{duration:1} }}
    >
      <div
        className={classes.wrapper}
        onClick={() => {
          setTimeout(() => {
            props.trigger();
          }, 100);
          console.log("close");
        }}
      >
        <img
          className={classes.certificateImage}
          src={props.image}
          alt=""
        ></img>
      </div>
    </motion.div>
  );
}
