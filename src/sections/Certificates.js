import classes from "./Certificates.module.css";
import { motion, useScroll,useSpring } from "framer-motion";
import { useRef } from "react";
import Certificate from "../Components/Certificate";
import degree from "../resources/certs/degree.png"
import GCP1 from "../resources/certs/GCP1.png"
import game from "../resources/certs/game.png"
import NPTEL from "../resources/certs/nptel.png"
import music from "../resources/certs/music.png"
import Huawei from "../resources/certs/huawei.jpg"
import trinity from "../resources/certs/trinity.png"




export default function Parallax() {
  const data = [
  
    {
      id: 2,
      title: "NPTEL Data Science Certification",
      image:NPTEL

    },
    {
      id: 3,
      title: "Google Cloud Platform Crash Course",
      image:GCP1,
    },
    {
      id: 4,
      title: "Game Development for Modern platforms(Unity)",
      image:game,

    },
    {
      id: 5,
      title: "Music Production",
      image:music,

    },
    {
      id: 6,
      title: "Huawei HMS Training",
      image:Huawei,

    },
    {
      id: 7,
      title: "Trinity Grade 5 Electronic Keyboard",
      image:trinity,

    },
  
  ];

  const referenceContainer=useRef();//full length of the main container is using as scroll
  const {scrollYProgress}=useScroll({target:referenceContainer,offset:["end end","start start"]});
  

  return (
    <div id="Certificates" className={classes.main}>
      <div className={classes.wrapper} ref={referenceContainer}>
        <div className={classes.heading}>
          <h1>Certificates</h1>
          <motion.div
            className={classes.line}
            style={{scaleX:useSpring(scrollYProgress,{damping:12})}}
          />
        </div>

        <div className={classes.itemWrapper}>
          {data.map((item) => {
            return <Certificate data={item} key={item.id}></Certificate>;
          })}
        </div>

        <div className={classes.footer}> Many more to come!!</div>
      </div>
    </div>
  );
}
