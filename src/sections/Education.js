import classes from "./Education.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ImagePopUp from "../Components/ImagePopUp";
import plus2 from "../resources/certs/plus2.png";
import degree from "../resources/certs/degree.png";
import resume from "../resources/certs/resume.png";

 
export default function Education() {
  const variant = {
    initial: {
      x: -100,
    },
    animate: {
      x: 0,
    },
    hover: {
      scale: 1.1,
    },
  };
  const variant2 = {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
    },
    hover: {
      scale: 1.1,
    },
  };
  const [openImage1, setOpenImage1] = useState(false);
  const [openImage2, setOpenImage2] = useState(false);
  const [openImageResume, setOpenImageResume] = useState(false);
  


  function trigger() {
    setOpenImage1(false);
    setOpenImage2(false);
    setOpenImageResume(false);
  }

  return (
    <div id="Education" className={classes.main}>       

     
     <div className={classes.wrapper}> 

        <h1 className={classes.heading}>Education</h1>
        <motion.div className={classes.line} initial={{ scaleX: .8 }} whileInView={{ scaleX: 1, transition: { type: "spring" } }}/>

        <div className={classes.itemWrapperTop}>
          <motion.div className={classes.resume} variants={variant} initial={{ y: -20 }} whileInView={{ y: 0 }} whileHover={{ scale: 1.1 }} onClick={() => setOpenImageResume(true)}>
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 846.66 846.66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.88 111.05l784.9 0c11.4,0 20.64,9.24 20.64,20.64l0 583.28c0,11.4 -9.24,20.64 -20.64,20.64l-784.9 0c-11.4,0 -20.64,-9.24 -20.64,-20.64l0 -583.28c0,-11.4 9.24,-20.64 20.64,-20.64zm146.05 288.17c0,27.16 -41.29,27.16 -41.29,0 0,-32.49 15.12,-63.05 40.68,-82.92 -1.61,-2.27 -3.11,-4.62 -4.48,-7.04 -6.45,-11.45 -10.12,-24.63 -10.12,-38.63 0,-43.57 35.32,-78.89 78.89,-78.89 43.56,0 78.89,35.32 78.89,78.89 0,16.39 -5.09,32.34 -14.61,45.67 25.57,19.87 40.69,50.43 40.69,82.92 0,27.16 -41.29,27.16 -41.29,0 0,-23.44 -12.59,-44.7 -33.14,-55.92 -9.59,4.06 -20.13,6.22 -30.54,6.22 -10.41,0 -20.96,-2.16 -30.55,-6.22 -20.54,11.22 -33.13,32.48 -33.13,55.92zm-55.14 91.99l237.63 0c11.4,0 20.65,9.25 20.65,20.65l0 122.41c0,11.4 -9.25,20.65 -20.65,20.65l-237.63 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -122.41c0,-11.4 9.24,-20.65 20.64,-20.65zm216.99 41.29l-196.34 0 0 81.13 196.34 0 0 -81.13zm-98.17 -299.47c-20.77,0 -37.6,16.83 -37.6,37.6 0,21.09 16.9,37.6 37.6,37.6 20.72,0 37.6,-16.69 37.6,-37.6 0,-20.77 -16.84,-37.6 -37.6,-37.6zm183.62 29.12c-27.15,0 -27.15,-41.29 0,-41.29l300.64 0c27.15,0 27.15,41.29 0,41.29l-300.64 0zm46.81 363.65c-27.16,0 -27.16,-41.3 0,-41.3l253.83 0c27.15,0 27.15,41.3 0,41.3l-253.83 0zm-46.81 -272.74c-27.15,0 -27.15,-41.29 0,-41.29l300.64 0c27.15,0 27.15,41.29 0,41.29l-300.64 0zm46.81 90.91c-27.16,0 -27.16,-41.29 0,-41.29l253.83 0c27.15,0 27.15,41.29 0,41.29l-253.83 0zm0 90.92c-27.16,0 -27.16,-41.3 0,-41.3l253.83 0c27.15,0 27.15,41.3 0,41.3l-253.83 0zm324.09 -382.55l-743.6 0 0 541.98 743.6 0 0 -541.98z"
              />
            </svg>
            <h2>Resume</h2>
          </motion.div>
          <div className={classes.itemWrapper}>
            <motion.div className={classes.item} variants={variant} initial="initial" whileInView="animate" whileHover="hover" onClick={() => setOpenImage1(true)}>
              <div>
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30 21.25h-6.25v-8.957l5.877 3.358c0.107 0.062 0.236 0.098 0.373 0.099h0c0.414-0.001 0.749-0.336 0.749-0.751 0-0.277-0.15-0.519-0.373-0.649l-0.004-0.002-13.623-7.784v-0.552c0.172 0.016 0.35 0.068 0.519 0.068 0.004 0 0.010 0 0.015 0 0.475 0 0.934-0.067 1.368-0.193l-0.035 0.009c0.323-0.063 0.693-0.099 1.073-0.099 0.392 0 0.775 0.039 1.146 0.112l-0.037-0.006c0.039 0.007 0.083 0.012 0.129 0.012 0.184 0 0.352-0.068 0.479-0.181l-0.001 0.001c0.161-0.139 0.263-0.343 0.264-0.571v-2.812c0 0 0-0 0-0 0-0.355-0.247-0.653-0.579-0.73l-0.005-0.001c-0.419-0.111-0.9-0.176-1.396-0.176-0.5 0-0.985 0.065-1.446 0.187l0.039-0.009c-0.288 0.067-0.618 0.105-0.958 0.105-0.231 0-0.457-0.018-0.678-0.052l0.025 0.003c-0.122-0.256-0.378-0.43-0.676-0.43-0.412 0-0.746 0.334-0.746 0.746 0 0.001 0 0.003 0 0.004v-0 4.565l-13.622 7.784c-0.227 0.132-0.378 0.374-0.378 0.651 0 0.414 0.336 0.75 0.75 0.75 0.137 0 0.265-0.037 0.376-0.101l-0.004 0.002 5.878-3.359v8.957h-6.25c-0.414 0-0.75 0.336-0.75 0.75v0 8c0 0.414 0.336 0.75 0.75 0.75h28c0.414-0 0.75-0.336 0.75-0.75v0-8c-0-0.414-0.336-0.75-0.75-0.75v0zM18.658 3.075c0.298-0.082 0.64-0.13 0.993-0.13 0.183 0 0.363 0.013 0.539 0.037l-0.020-0.002v1.339c-0.16-0.013-0.345-0.021-0.533-0.021-0.489 0-0.966 0.052-1.425 0.151l0.044-0.008c-0.304 0.088-0.653 0.139-1.014 0.139-0.174 0-0.344-0.012-0.512-0.034l0.020 0.002v-1.323c0.15 0.014 0.325 0.021 0.502 0.021 0.499 0 0.984-0.062 1.447-0.18l-0.041 0.009zM2.75 22.75h5.5v6.5h-5.5zM9.75 22v-10.564l6.25-3.571 6.25 3.572v17.814h-2.5v-5.25c-0-0.414-0.336-0.75-0.75-0.75h-6c-0.414 0-0.75 0.336-0.75 0.75v0 5.25h-2.5zM13.75 29.25v-4.5h4.5v4.5zM29.25 29.25h-5.5v-6.5h5.5zM16 19.75c2.071 0 3.75-1.679 3.75-3.75s-1.679-3.75-3.75-3.75c-2.071 0-3.75 1.679-3.75 3.75v0c0.002 2.070 1.68 3.748 3.75 3.75h0zM16 13.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25c-1.243 0-2.25-1.007-2.25-2.25v0c0.002-1.242 1.008-2.248 2.25-2.25h0z" />
                </svg>
                <h2>Schooling</h2>
                <h3>CBSE</h3>
                <div>High School(2016): 9.8 CGPA</div>
                <div>Senior School(2018): 85.4%</div>
              </div>
            </motion.div>
            <motion.div className={classes.item} variants={variant2} initial="initial" whileInView="animate" whileHover="hover" onClick={() => setOpenImage2(true)}>
              <div>
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643"
                  />
                  <path
                    d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z"
                  />
                </svg>
                <h2>College</h2>
                <h3>APJAKTU</h3>
                <div>BTech Computer Science(2023): 8.94 CGPA</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>





      {openImage1 ? (<ImagePopUp trigger={trigger} image={plus2}></ImagePopUp>) : ("")}
      {openImage2 ? (<ImagePopUp trigger={trigger} image={degree}></ImagePopUp>) : ("")}
      {openImageResume ? (<ImagePopUp trigger={trigger} image={resume}></ImagePopUp>) : ("")}
    </div>
  );
}
