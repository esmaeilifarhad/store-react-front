import React, { useState, useEffect } from 'react'
import './Footer.css'
const Footer = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        console.log('useEffected Called')
    }, [])
    return (
        <>
            <div className='footer'>
                <div className='row'>
                    <div className='col-md-4'>
                      
                      
                    </div>
                    <div className='col-md-4'>
                       
                       
                    </div>
                    <div className='col-md-4'>
                       
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer