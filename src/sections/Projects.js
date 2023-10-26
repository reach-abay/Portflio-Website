import classes from "./Projects.module.css";
import {useRef} from "react";
import {motion,useScroll, useSpring, useTransform} from "framer-motion"

export default function Projects() {
  const items = [
    {
      id: 1,
      title: "Reminder Assistant",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto dolorem veritatis amet quam! Inventore totam sint laborum, quo, expedita aperiam voluptatum repudiandae illo consequatur doloribus distinctio consectetur rem ea.",
      image:
        "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://google.com",
    },
    {
      id: 2,
      title: "NFT Bidder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto dolorem veritatis amet quam! Inventore totam sint laborum, quo, expedita aperiam voluptatum repudiandae illo consequatur doloribus distinctio consectetur rem ea.",
      image:
        "https://images.pexels.com/photos/17774928/pexels-photo-17774928/free-photo-of-laptop-and-water-with-lemon.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://google.com",
    },
    {
      id: 3,
      title: "Study Abroad Application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto dolorem veritatis amet quam! Inventore totam sint laborum, quo, expedita aperiam voluptatum repudiandae illo consequatur doloribus distinctio consectetur rem ea.",
      image:
        "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://google.com",
    },
    {
      id: 4,
      title: "Visual Question Answering",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto dolorem veritatis amet quam! Inventore totam sint laborum, quo, expedita aperiam voluptatum repudiandae illo consequatur doloribus distinctio consectetur rem ea.",
      image:
        "https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://google.com",
    },{
        id: 5,
        title: "Blogger",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto dolorem veritatis amet quam! Inventore totam sint laborum, quo, expedita aperiam voluptatum repudiandae illo consequatur doloribus distinctio consectetur rem ea.",
        image:
          "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1600",
        link: "https://google.com",
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
