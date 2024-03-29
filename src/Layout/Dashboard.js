import React, { useContext, useState } from 'react';
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { IoIosMenu } from "react-icons/io";
import { Container } from 'react-bootstrap';
import logo from '../assets/logos/logo.png';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import { FiShoppingCart } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { BiMessageEdit } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { CiEdit } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import Footer from '../Pages/Shared/Footer/Footer';
import useAdmin from '../hooks/useAdmin';
import { TbEdit } from 'react-icons/tb';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('accessToken');
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div style={{ maxWidth: '1536px', margin: 'auto' }}>
            <div collapseOnSelect expand="lg" className="bg-body-tertiary w-100 p-2">
                <Container className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
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
                                                        <ActiveLink to='/dashboard/manage-services'>
                                                            <GoTasklist className='fs-5' />
                                                            <span className='ms-2'>Manage Services</span>
                                                        </ActiveLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/service-list'>
                                                            <GoTasklist className='fs-5' />
                                                            <span className='ms-2'>Service List</span>
                                                        </ActiveLink>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <ActiveLink to='/dashboard/my-orders'>
                                                            <FiShoppingCart className='fs-5' />
                                                            <span className='ms-2'>My Orders</span>
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
                                        <li className='mb-3'>
                                            <ActiveLink to='/dashboard/edit-profile'>
                                                <TbEdit className='fs-5' />
                                                <span className='ms-2'>Edit Profile</span>
                                            </ActiveLink>
                                        </li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" style={{ width: '140px' }} />
                        </Link>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='btn-sm'>
                            {
                                user.photoURL ?
                                    (
                                        <img
                                            src={user.photoURL}
                                            alt="userImg"
                                            style={{ border: '3px solid #7AB259', borderRadius: '100%', width: '44px', height: '44px', }}
                                        />
                                    )
                                    :
                                    (
                                        <span className='fs-6'>
                                            {user.displayName.slice(0, 12)}
                                        </span>
                                    )
                            }
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: '320px' }} className='mt-3 me-2 me-lg-0 bg-light p-3 py-4'>
                            <div className='text-center'>
                                <div className='position-relative mb-3'>
                                    <div className='text-center'>
                                        {
                                            user.photoURL ?
                                                (
                                                    <img
                                                        src={user.photoURL}
                                                        alt="userImg"
                                                        style={{ border: '4px solid #7AB259', borderRadius: '100%', width: '80px', height: '80px', }}
                                                    />
                                                )
                                                :
                                                (
                                                    <h1
                                                        className='d-flex align-items-center justify-content-center text-white mx-auto fw-normal '
                                                        style={{ fontSize: '60px', backgroundColor: '#7AB259', borderRadius: '100%', width: '80px', height: '80px', }}
                                                    >
                                                        {user.displayName.slice(0, 1)}
                                                    </h1>
                                                )
                                        }
                                    </div>
                                    <Link to={'/dashboard/edit-profile'} style={{ left: '157px' }} className='edit-profile-icon'>
                                        <CiEdit className='fs-5' />
                                    </Link>
                                </div>
                                <h2 className='fs-5 mb-1'>{user.displayName}!</h2>
                                <p>{user.email}</p>
                            </div>
                            <Dropdown.Item
                                as={Link}
                                to={'/dashboard/edit-profile'}
                                className='d-flex justify-content-between align-items-center'
                            >
                                <span>Edit Profile</span>
                                <CiEdit className='fs-4' />
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={handleLogout}
                                style={{ backgroundColor: '#7AB259', color: 'white', borderRadius: '5px' }}
                                className='d-flex justify-content-between align-items-center mt-1'
                            >
                                <span>Logout</span>
                                <IoLogOutOutline className='fs-4' />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </div>
            <div className='container'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;