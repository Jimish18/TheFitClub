import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'


const Reasons = () => {
  return (
    
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="image 1" />
            <img src={image2} alt="image 2" />
            <img src={image3} alt="image 3" />
            <img src={image4} alt="image 4" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>Why</span>
                <span> Choose us ?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt="tick image" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="tick image" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="tick image" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="tick image" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span>OUR PARTNERS</span>

            <div className='partners'>
                <img src={nb} alt="brand icons" />
                <img src={adidas} alt="brand icons" />
                <img src={nike} alt="brand icons" />
            </div>
        </div>
    </div>
  )
}

export default Reasons;