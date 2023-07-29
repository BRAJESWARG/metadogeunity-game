import React from 'react';
import HowItWork from './Image/pie chart.png';
import './HowDoesItWork.css'

const HowDoesItWork = () => {
    return (
        <div className='HowDoesItWork'>
            <div className='HowDoesItWork-head'>
                How does it work ?
            </div>
            <div className='HowDoesItWork-img-box'>
                {
                    <img src={HowItWork} className='HowDoesItWork-img' alt='HowItWork' />
                }
            </div>
        </div>
    )
}

export default HowDoesItWork