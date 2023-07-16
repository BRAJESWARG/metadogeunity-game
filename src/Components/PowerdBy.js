import React from 'react'
import Ethereum from './Image/ethereum.png';
import Binance from './Image/Binance-Vertical-Logo.wine.svg';
import Metamask from './Image/metamask.png';
import Polygon from './Image/Polygon-Logo.svg';
import './PowerdBy.css'

const PowerdBy = () => {
    return (
        <div className='PowerdBy'>
            <div className='PowerdBy-logo-head'>
                Powerd By
            </div>
            <div className='PowerdBy-logo-box'>
                <div>
                    <img src={Ethereum} alt='Ethereum' className='PowerdBy-logo Ethereum' />
                </div>
                <div>
                    <img src={Binance} alt='Binance' className='PowerdBy-logo Binance' />
                </div>
                <div>
                    <img src={Metamask} alt='Metamask' className='PowerdBy-logo Metamask' />
                </div>
                <div>
                    <img src={Polygon} alt='polygon' className='PowerdBy-logo polygon' />
                </div>
            </div>
        </div>
    )
}

export default PowerdBy