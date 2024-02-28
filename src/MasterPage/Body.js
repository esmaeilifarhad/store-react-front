import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './../Home/Home';
import NoPage from './../Public/NoPage';
import CategoryList from '../Category/CategoryList';
import ProductMain from '../Product/ProductMain';



const Body = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {

    }, [])



    return (
        <>
            <div className='body'>
                <div className='row'>
                    <div className='col-md-1'>


                    </div>
                    <div className='col-md-10'>

                        <Routes>
                            <Route path='/' element={<Home />} />

                            <Route exact path="Product" element={<ProductMain />} />


                            <Route path="Category" element={<CategoryList />} />



                            <Route path="*" element={<NoPage />} />
                        </Routes>

                    </div>
                    <div className='col-md-1' >


                    </div>
                </div>
            </div>
        </>
    )
}
export default Body