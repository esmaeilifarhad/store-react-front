import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import { PublicAxios } from '../Public/PublicAxios';
import BaseData from '../Public/BaseUrl.json'
import ProductList from './ProductList';
import ModalComp from './../Public/ModalComp';
import ProductCreate from './ProductCreate';


const ProductMain = () => {

    const [show, setShow] = useState(false)

    const [data, setData] = useState([])
    const [typeModal, setTypeModal] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [tagModal, setTagModal] = useState("")


    useEffect(() => {
        dataProduct()

    }, [])

    const dataProduct = async () => {

        setShow(true)

        var data = await PublicAxios(BaseData.baseUrl8001, 'get', 'Product')
        console.log(data)

        setShow(false)

        setData(data)



    }

    const handleShowModalCreate = () => {
        // setTagModal("<p>salam</p>")
        setTypeModal(2)
        handleShow()
    }

    const handleShowModalDelete = (id, name) => {

        setTagModal("<p>" + name + "</p>")
        setTypeModal(1)
        handleShow()
    }

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true)

    return (
        <>

            <ProductList data={data} handleShowModalCreate={handleShowModalCreate} handleShowModalDelete={handleShowModalDelete} show={show} />


            {typeModal == 1 ?
                <ModalComp showModal={showModal} handleClose={handleClose} headerTitle={<span>حذف رکورد</span>} body={tagModal} >

                </ModalComp>
                : null}

            {typeModal == 2 ?
                <ModalComp showModal={showModal} handleClose={handleClose} headerTitle={<span>عنوان جدید</span>} body={tagModal} >
                    <ProductCreate handleClose={handleClose} />
                </ModalComp>
                : null}

            {typeModal == 3 ?
                <ModalComp showModal={showModal} handleClose={handleClose} headerTitle={<span>ویرایش</span>} body={tagModal} >

                </ModalComp>
                : null}

        </>
    )
}
export default ProductMain