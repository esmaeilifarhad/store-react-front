import React, { useState, useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Body from './Body'


const MasterPage = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {

    }, [])
    return (
        <>
            <div className='container-fluid body' style={{ direction: 'rtl' }}>
                <Header />
                <Menu />


                <Body />
                <Footer />
            </div>
        </>
    )
}
export default MasterPage