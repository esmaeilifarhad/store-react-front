import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import BaseData from '../Public/BaseUrl.json'
import { PublicAxios } from '../Public/PublicAxios'

const ProductCreate = ({ handleClose }) => {

    const [data, setData] = useState({})
    const [show, setShow] = useState(false)
    const [id, setId] = useState(0)

    let history = useNavigate()
    const location = useLocation()


    useEffect(() => {
        console.log('useEffected Called')
    }, [])

    const handleSubmit = async event => {
        debugger
        event.preventDefault();
        console.log(data)
        data.id = generateUUID()
        console.log(data)
        setShow(true)
        var result = await PublicAxios(BaseData.baseUrl8001, 'post', 'Category', data)
        // var result = await PublicAxios(BaseData.baseUrlHint, 'post', 'hint/createupdate', data)
        setShow(false)

        handleClose()
    }

    function handleChange(e) {
        var obj = { ...data }
        if (id > 0) {
            obj.id = location.state.id
        }
        else {
            obj.id = 0
        }

        switch (e.target.type) {
            case "text":
                obj[e.target.name] = e.target.value

                break;

            case "textarea":
                obj[e.target.name] = e.target.value

                break;
            case "number":
                obj[e.target.name] = parseInt(e.target.value)

                break;
            case "checkbox":
                obj[e.target.name] = e.target.checked
                // obj[""]=
                break;

            default:
                break;
        }
        setData(obj)

    }

    function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">عنوان</label>
                    <input value={data.name} name='name' onChange={handleChange} type="text" className="form-control" placeholder="تعریف عنوان ..." />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">توضیحات</label>
                    <textarea value={data.description} name='description' onChange={handleChange} class="form-control" rows="6"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">ثبت</button>



            </form>

            {/* <button onClick={handleCreate}>Create</button> */}
        </>
    )
}
export default ProductCreate