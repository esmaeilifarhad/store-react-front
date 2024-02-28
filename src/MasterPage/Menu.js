import React, { useState, useEffect } from 'react'
import { Link, NavLink, Router } from 'react-router-dom'
import './Menu.css'
const Menu = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {

    }, [])
    return (
        <>
            <div className='menu' style={{ backgroundColor: 'black', textAlign: 'right' }}>
                <div className='row'>
                    <div className='col-md-12'>
                        <NavLink to="/"  >
                            <button className='btn btn-success' >Home</button>
                        </NavLink>
                        <span> | </span>
                        <NavLink to="Product">
                            <button className='btn btn-success' >Product</button>
                        </NavLink>
                        <span> | </span>
                        <NavLink to="Category">
                            <button className='btn btn-success' >Category</button>
                        </NavLink>
                        <span> | </span>
                        <NavLink to="hint">
                            <button className='btn btn-success' >Hint</button>
                        </NavLink >

                    </div>

                </div>
            </div>
        </>
    )
}
export default Menu