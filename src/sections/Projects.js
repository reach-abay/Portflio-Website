import classes from "./Projects.module.css";
import {useRef} from "react";
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
import blog from "../resources/projs/blog.png";
import nft from "../resources/projs/nft.png";
import rema from "../resources/projs/rema.png";
import vqa from "../resources/projs/vqa.png";
import wg from "../resources/projs/wg.png";



export default function Projects() {
  const items = [
    {
      id: 1,
      title: "Reminder Assistant",
      description:
        "A mobile application for capturing events to be reminded from user speech, by using speech recognition and DistilBERT NLP model. The application listens to the user through the on-device mic and picks up reminders from speech.",
      image:rema,
      link: "https://github.com/reach-abay/Reminder-Assistant",

    },
    {
      id: 2,
      title: "NFT Bidder",
      description:
      "Created a demo NFT bidder and seller demo application using Google firebase and java in Android studio. The user can browse through the NFTs (dummy NFTs) and bid on the same in real-time.",
      image:nft,
      link: "https://github.com/reach-abay/NFT-Bidder",
    },
    {
      id: 3,
      title: "Study Abroad Application",
      description:
      "Created a mobile application for EvoGlobal Pvt Ltd, with FlutterFlow front-end and AWS Server as back-end that helps students with study abroad services.",
      image:wg,
      link: "no_details",
    },
    {
      id: 4,
      title: "Visual Question Answering",
      description:
      "Created a mobile application with the help of machine learning models, LSTM and VGG-19, that can answer questions based on live video input.",
      image:vqa,
      link: "https://github.com/reach-abay/Vqa",
    },{
        id: 5,
        title: "Blogger",
        description:
        "Blogger application with ReactJS and C#(.net) where users can signup and upload blogs",
        image:blog,
        link: "https://github.com/reach-abay/Blogger",
      },
  ];

  const referenceContainer=useRef();//full length of the main container is using as scroll
  const {scrollYProgress}=useScroll({target:referenceContainer,offset:["end end","start start"]});
  

  const ItemProject=({item})=>{
    return(

        <div className={classes.itemDiv} >
            <div  className={classes.wrapper}>
                <motion.div className={classes.imageDiv} initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}>
                    <div>
                      <img className={classes.image} src={item.image} alt=""></img>
                    </div>
                </motion.div>
                <motion.div className={classes.content} initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}}>
                    <h2 className={classes.title}>{item.title}</h2>
                    <p className={classes.description}>{item.description}</p>
                   {item.link!=="no_details"?<a className={classes.button}href={item.link} target="_blank">More details</a>:<div>(Unable to disclose more information)</div>}
                </motion.div>
            </div>
        </div>
    )
  }

  return (
    <div id="Projects" className={classes.main} ref={referenceContainer}>
        <div className={classes.progress}>
            <h1 className={classes.progressHeading}>My Projects</h1>
            <motion.div className={classes.progressBar} style={{scaleX:useSpring(scrollYProgress,{damping:12})}}> </motion.div>

        </div>
      {items.map((item) => {
        return( 
            <ItemProject key={item.id} item={item}></ItemProject>
        )
      })}
    </div>
  );
}
