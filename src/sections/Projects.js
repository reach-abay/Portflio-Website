import classes from "./Projects.module.css";
import {useRef} from "react";
import {motion,useScroll, useSpring, useTransform} from "framer-motion"

export default function Projects() {
  const items = [
    {
      id: 1,
      title: "Reminder Assistant",
      description:
        "A mobile application for capturing events to be reminded from user speech, by using speech recognition and DistilBERT NLP model. The application continuously listens to the user through the on-device mic and picks up reminders from speech.",
      image:
        "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://github.com/reach-abay/Reminder-Assistant",
    },
    {
      id: 2,
      title: "NFT Bidder",
      description:
      "Created a demo NFT bidder and seller demo application using Google firebase and java in Android studio. The user can browse through the NFTs (dummy NFTs) and bid on the same in real-time.",
      image:
        "https://images.pexels.com/photos/17774928/pexels-photo-17774928/free-photo-of-laptop-and-water-with-lemon.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/reach-abay/NFT-Bidder",
    },
    {
      id: 3,
      title: "Study Abroad Application",
      description:
      "Created a mobile application for EvoGlobal Pvt Ltd, with FlutterFlow front-end and AWS Server as back-end that helps students for study abroad services.",
      image:
        "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://google.com",
    },
    {
      id: 4,
      title: "Visual Question Answering",
      description:
      "Created a mobile application with the help of machine learning models, LSTM and VGG-19, that can answer questions based on live video input.",
      image:
        "https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://github.com/reach-abay/Vqa",
    },{
        id: 5,
        title: "Blogger",
        description:
        "Blogger application with ReactJS and C#(net) where users can signup and upload blogs",
        image:
          "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                    <img className={classes.image} src={item.image} alt=""></img>
                </motion.div>
                <motion.div className={classes.content} initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}}>
                    <h2 className={classes.title}>{item.title}</h2>
                    <p className={classes.description}>{item.description}</p>
                    <a className={classes.button}href={item.link}>More details</a>
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
