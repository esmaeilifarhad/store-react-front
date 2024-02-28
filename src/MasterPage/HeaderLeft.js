import React, { useState, useEffect } from 'react'
import { AllDateNeedExist, CurrentTime, foramtTime } from '../Helper/DatetimeUtility'
const HeaderLeft = () => {
    const [allDateNeedExist, setAllDateNeedExist] = useState({})
    const [timer, setTimer] = useState("")


    useEffect(() => {

        setAllDateNeedExist(AllDateNeedExist())

        getCurrentTime()


    }, [])

    const getCurrentTime = () => {

        const interval = setInterval(() => {

            var currentTime = foramtTime(CurrentTime())

            setTimer(currentTime)
        }, 1000)
    }
    return (
        <>

            <table className='table table-bordered table-hover'>
                <tr>
                    <th>امروز</th>
                    <th>روز هفته</th>
                    <th>ساعت</th>
                    <th>هفته</th>
                    <th>روز از سال</th>
                    <th>مانده تا سال</th>
                    <th>مانده تا روز</th>
                </tr>

                <tr>
                    <td>{allDateNeedExist.isKabise ? allDateNeedExist.currentShamsyDateBySlash + 'کبیسه' : allDateNeedExist.currentShamsyDateBySlash}</td>
                    <td>{allDateNeedExist.dayOfWeekShamsystring}</td>
                    <td>{timer}</td>
                    <td>28</td>
                    <td>300</td>
                    <td>30%</td>
                    <td>20%</td>
                </tr>

            </table>

        </>
    )
}
export default HeaderLeft