import React from 'react'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import './Hero.css'
import { motion } from 'framer-motion';


const Hero = () => {

  const transition = {type : 'spring' , duration : 2}

  let tablet = (window.innerWidth > 1440 ) ? false : true;
  let mobile = (window.innerWidth <= 440 ) ? true : false;
  

  return (
    <div className="hero" id='Hero'>

      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header/>

        {/* The Best Ad (animated Section)  */}
        <div className="the-best-ad">

          <motion.div
          initial = {{left : (mobile === true) ? '220px' : '290px'}}
          whileInView = {{left : '8px'}}
          transition = {{...transition, type : 'tween'}}
          ></motion.div>

          <span>The best Fitness Club in the Town</span>
        </div>

        {/* Hero text Section */}
        <div className="hero-text">
          
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>member joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Button Section */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>


      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial = {{right : '-1rem'}}
        whileInView = {(mobile === true) ? {right : '1rem'} : {right : '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="Heart Image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="Hero image" className='hero-image'/>
        <motion.img 
        initial = {{right : '5rem'}}
        whileInView = {{right : '20rem'}}
        transition = {transition}
        src={hero_image_back} alt="Hero image background" className='hero-image-back'/>

        {/* Calories */}
        <motion.div 
        initial = {(tablet === true) ? {right : '-10rem'} : {right : '38rem'}}
        whileInView = {(tablet === true) ? {right : '3rem'} : {right : '28rem'}}
        transition = {transition}
        className="calories">
          <img src={Calories} alt="Calories Graph" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;