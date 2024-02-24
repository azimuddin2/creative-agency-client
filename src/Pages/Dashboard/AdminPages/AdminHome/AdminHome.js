import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { GiMoneyStack } from "react-icons/gi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import CountUp from 'react-countup';
import './AdminHome.css'
import AdminHomeCharts from './AdminHomeCharts';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: adminStats = {}, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin-stats', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logOut();
                localStorage.removeItem('accessToken');
                navigate('/login');
            }
            const data = await res.json();
            return data;
        }
    })

    const { revenue, users, services, orders } = adminStats;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='my-4'>
            <h1 style={{ fontFamily: "Roboto Condensed" }} className='fs-4'>Hi Welcome {user.displayName}👋</h1>
            <div className='admin-home-information mt-3'>
                <div className="bg-light p-4 p-lg-5 rounded-2">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <GiMoneyStack style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    $<CountUp end={revenue} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-4 p-lg-5 rounded-2">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <PiUsersThreeDuotone style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    0<CountUp end={users} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-4 p-lg-5 rounded-2">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <MdOutlineDesignServices style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    0<CountUp end={services} duration={5} />
                                </h5>
                                <p style={{ color: '#7AB259' }} className="card-text fs-4 mt-1">Service</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-4 p-lg-5 rounded-2">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4 text-center ">
                            <TfiShoppingCartFull style={{ fontSize: '60px', color: '#7AB259' }} />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body text-center ">
                                <h5 className="card-title fs-2 fw-bolder ">
                                    0<CountUp end={orders} duration={5} />
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