import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import { PublicAxios } from '../Public/PublicAxios';
import BaseData from '../Public/BaseUrl.json'

const ProductList = ({ data, handleShowModalCreate, handleShowModalDelete,show }) => {
    //const [show, setShow] = useState(false)
    useEffect(() => {


    }, [])




    return (
        <>
            <input type='button' value="جدید" className='btn btn-info' onClick={handleShowModalCreate} />
            <table className='table table-bordered'>
                <tr>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>قیمت</th>
                    <th>توضیحات</th>
                    <th style={{ textAlign: "center" }}>عملیات</th>
                </tr>
                {show == true ? <ReactLoading type={"bubbles"} color="red" /> : null}
                {
                    data.map((x, index) =>

                        <tr key={x.id} style={{ whiteSpace: "pre" }}>
                            <td style={{ color: "red" }}>{(index + 1)}</td>
                            <td>{x.name}</td>
                            <td>{x.price}</td>
                            <td>{x.description}</td>
                            <td>
                                <input type='button' value="ویرایش" className='btn btn-success' />
                                <span>  |  </span>
                                <input type='button' value="حذف" className='btn btn-danger' onClick={() => handleShowModalDelete(x.id,x.name)} />
                            </td>
                        </tr>
                    )
                }


            </table>


        </>
    )
}
export default ProductList