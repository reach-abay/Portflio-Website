import { useRef, useState } from 'react'
import classes from './Contact.module.css'
import {motion, useInView} from "framer-motion"
import emailjs from '@emailjs/browser';

export default function Contact(){

    const variant={
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:.2,
                staggerChildren:.05
            }
        }
    }
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"});
    const form = useRef();

      
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qdndahv', 'template_0p06q24', form.current, 'Y7nEUoX7m_zFcOYm6')
        .then((result) => {

            alert("Successfully Submitted!")

        }, (error) => {
            alert(" Failed to Submit!")


        });
    };


    return(<div id="Contact" className={classes.main}>
        <div  className={classes.wrapper} ref={ref} >
            <motion.div  className={classes.text} variants={variant} initial="initial" whileInView="animate">
                <motion.h1 className={classes.headText} variants={variant}>Get in Touch!!</motion.h1>
                <motion.div  className={classes.item} variants={variant}>
                    <h2>Email</h2>
                    <div>abayrajum@gmail.com</div>
                </motion.div>
                <motion.div  className={classes.item} variants={variant}>
                    <h2>Phone</h2>
                    <div>+91-9747221112</div>
                </motion.div>
                <motion.div  className={classes.item} variants={variant}>
                    <h2>Address</h2>
                    <div>Thrissur, Kerala, India</div>
                </motion.div>
            </motion.div>
            <div  className={classes.formInput}>

               <motion.div className={classes.phoneSvg}  initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}> 
                    <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <motion.path   initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:7}} strokeLinecap="round" strokeLinejoin="round"  d="M17.5 4.842C15.976 4.337 14.146 4 12 4c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 11l-3-2V4.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 11l3-2V4.842zM10 7v3m0 0-5.414 5.414A2 2 0 0 0 4 16.828V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.172a2 2 0 0 0-.586-1.414L14 10m-4 0h4m0 0V7"/>
                    <motion.circle  initial={{pathLength:0}} animate={isInView && {pathLength:1.1}} transition={{duration:2}} cx="12" cy="15" r="2"  strokeLinecap="round" strokeLinejoin="round"/></svg>
               </motion.div> 


                <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3,duration:1}} ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name='user_name' required/>
                    <input type='email' placeholder='Email' name='user_email' required/>
                    <textarea placeholder='Enter Text' name='message' required/>
                    <button type='submit'>Submit</button>
                </motion.form>

 
            </div>
        </div>
    </div>)
}