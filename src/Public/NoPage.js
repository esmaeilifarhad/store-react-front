import React, { useState, useEffect } from 'react'
const NoPage = () => {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
    }, [])
    return (
        <>
            <p>Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
        </>
    )
}
export default NoPage 