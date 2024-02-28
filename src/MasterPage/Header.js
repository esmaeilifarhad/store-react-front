import React, { useState, useEffect } from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {

    }, [])
    return (
        <>
            <div className='header' style={{ backgroundColor: '#940808', color: 'wheat' }}>
                <div className='row'>
                    <div className='col-md-4'>
                        <HeaderLeft />
                    </div>
                    <div className='col-md-4' style={{ backgroundImage: 'linear-gradient(to right, red, yellow)', color: 'wheat' }}>
                        <span className='fa fa-times'></span>
                        <i className="fas fa-wrench"></i>
                        به نام خدا
                    </div>
                    <div className='col-md-4'>
                        <HeaderRight />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header