import React, { useState, useEffect } from 'react'
import { PublicAxios } from '../Public/PublicAxios'
import BaseData from '../Public/BaseUrl.json'
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';



const HeaderRight = () => {


    const [show, setShow] = useState(false)

    let history = useNavigate()

    const createBackup = async () => {
        setShow(true)
        var result = await PublicAxios(BaseData.baseUrlTools, '', 'Message/CreateBackup')
        setShow(false)
        history('/hint')

    }

    const restoreDatabase = async () => {
        setShow(true)
        var result = await PublicAxios(BaseData.baseUrlTools, '', 'Message/RestoreDatabse')
        setShow(false)
        history('/hint')

    }

    return (
        <>
            {show == true ? <ReactLoading type={"bubbles"} color="red" /> : null}

            <div >
                <span>فرهاد اسماعیلی</span>
                <button>خروج</button>
                <button onClick={createBackup}>BackUp</button>
                <button onClick={restoreDatabase}>Restore</button>
            </div>

        </>
    )
}
export default HeaderRight