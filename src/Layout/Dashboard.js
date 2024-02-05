import React, { useState } from 'react';
import { Alert, Button, Offcanvas } from 'react-bootstrap';
import { IoIosMenu } from "react-icons/io";

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" className="" onClick={handleShow}>
                <IoIosMenu className='fs-5' />
            </Button>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="mb-0">
                        <li>Order</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default Dashboard;