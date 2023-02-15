import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="Plans" id="plans">

        <div className="blur blur-p1"></div>
        <div className="blur blur-p2"></div>

        <div className="programs-header">
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* Plans Cards */}
        <div className="plans-card">
            {
                plansData.map((plan,index) =>
                {
                    return (
                        <div className="plan" key = {index}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature,i)=>
                                {
                                    return (
                                        <div className="feature">
                                            <img src={whiteTick} alt="white tick" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                <span>See more benefits -></span>
                            </div>

                            <button className="btn">Join Now</button>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Plans;