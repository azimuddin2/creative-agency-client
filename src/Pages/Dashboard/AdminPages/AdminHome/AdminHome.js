import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { GiMoneyStack } from "react-icons/gi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import CountUp from 'react-countup';
import './AdminHome.css'
import AdminHomeCharts from './AdminHomeCharts';

const AdminHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='my-4'>
            <h1 style={{ fontFamily: "Roboto Condensed" }} className='fs-4'>Hi Welcome {user.displayName}👋</h1>

            <div className='admin-home-information mt-3'>



                <div className="bg-light p-4 p-lg-5 rounded-1">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <GiMoneyStack style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    $<CountUp end={10000} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-4 p-lg-5 rounded-1">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <PiUsersThreeDuotone style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    <CountUp end={100} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Users</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-4 p-lg-5 rounded-1">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <MdOutlineDesignServices style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    <CountUp end={10} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Service</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-4 p-lg-5 rounded-1">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <TfiShoppingCartFull style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    <CountUp end={20} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Orders</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className='mt-4'>
                <AdminHomeCharts></AdminHomeCharts>
            </div>

        </div>
    );
};

export default AdminHome;