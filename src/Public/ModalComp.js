import React, { useState, useEffect } from 'react'
import { Button, Modal } from "react-bootstrap";
import parse from 'html-react-parser'


const ModalComp = ({ handleClose, showModal, headerTitle, body, children }) => {
    //const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        debugger
        console.log(body)
    }, [showModal])
    return (
        <>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={showModal} onHide={handleClose}>
                    <div className='row' style={{padding:'10px 0px 0px 0px'}}>
                        <div className='col-md-4' style={{ textAlign: 'left', padding:'0px 0px 0px 27px'}}>
                            <span onClick={handleClose} style={{cursor:'pointer'}} className='fa fa-times'></span>

                        </div>
                        <div className='col-md-4' style={{textAlign:'center'}}>
                            <span >{headerTitle}</span>

                        </div>

                        <div className='col-md-4'>

                        </div>

                    </div>
         
                    <hr />
                    <Modal.Body style={{ direction: 'rtl' }}>
                        {parse(body)}
                        {children}
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleModalSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>

        </>
    )
}
export default ModalComp