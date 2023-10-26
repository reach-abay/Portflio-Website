import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Nav/Navbar'
import classes from './Intro.module.css'

export default function Intro(){
    return(<div id="Intro"className={classes.main}>
       <Navbar ></Navbar>
       <Hero></Hero>
    </div>)
}