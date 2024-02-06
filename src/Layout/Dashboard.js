import React, { useContext, useState } from 'react';
import { Button, Dropdown, NavDropdown, Offcanvas } from 'react-bootstrap';
import { IoIosMenu } from "react-icons/io";
import { Container, Nav } from 'react-bootstrap';
import logo from '../assets/logos/logo.png';
import { Link } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import { FiShoppingCart } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { BiMessageEdit } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { PiUserCircleThin, PiUsersThreeDuotone } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Dashboard = () => {
    const isAdmin = true;
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ maxWidth: '1536px', margin: 'auto' }}>
            <div collapseOnSelect expand="lg" className="bg-body-tertiary w-100 p-2">
                <Container className='d-flex justify-content-between align-items-center'>
                    <div className=' d-flex align-items-center '>
                        <div>
                            <Button variant="light" className="" onClick={handleShow}>
                                <IoIosMenu className='fs-4' />
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <img src={logo} alt="logo" style={{ width: '130px' }} />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul className="mb-0">
                                        {
                                            isAdmin ?
                                                <>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard'>
                                                            <RxDashboard className='fs-5' />
                                                            <span className='ms-2'>Dashboard</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/all-user'>
                                                            <PiUsersThreeDuotone className='fs-5' />
                                                            <span className='ms-2'>All User</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/add-service'>
                                                            <MdOutlineLibraryAdd className='fs-5' />
                                                            <span className='ms-2'>Add Service</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/service-list'>
                                                            <GoTasklist className='fs-5' />
                                                            <span className='ms-2'>Service List</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/make-admin'>
                                                            <RiUserSettingsLine className='fs-5' />
                                                            <span className='ms-2'>Make Admin</span>
                                                        </ActiveLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard'>
                                                            <GoTasklist className='fs-5' />
                                                            <span className='ms-2'>Service List</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/my-order'>
                                                            <FiShoppingCart className='fs-5' />
                                                            <span className='ms-2'>My Order</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/add-review'>
                                                            <BiMessageEdit className='fs-5' />
                                                            <span className='ms-2'>Add Review</span>
                                                        </ActiveLink>
                                                    </li>
                                                </>
                                        }
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" style={{ width: '140px' }} />
                        </Link>
                    </div>


                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {/* <PiUserCircleThin className=' fs-1 '/> */}
                            {user.displayName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: '320px' }} className='mt-3 me-sm-2 me-lg-0 bg-light p-2 py-4'>
                            <div className=' text-center '>
                                <div>
                                    {
                                        user.photoURL ?
                                            <img src={user.photoURL} alt="" />
                                            :
                                            <h1>{user.displayName.slice(0, 1)}</h1>
                                    }
                                </div>
                                <h2 className='fs-5'>{user.displayName}!</h2>
                                <p>{user.email}</p>
                            </div>
                            <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </div>

        </div>
    );
};

export default Dashboard;