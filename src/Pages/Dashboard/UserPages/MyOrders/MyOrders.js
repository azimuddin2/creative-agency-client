import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import { Table } from 'react-bootstrap';
import OrderRow from './OrderRow';
import orderGif from '../../../../assets/images/order.gif';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import './MyOrders.css';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const MyOrders = () => {
    useTitle('My Orders');
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: orders = [], isLoading, error } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://creative-agency-server-ivory.vercel.app/orders?email=${user?.email}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='my-5'>
            {
                orders?.length > 0 ?
                    (
                        <div className='px-2 width'>
                            <h2 className='fs-3 mb-3'>My Orders: 0{orders?.length}</h2>
                            <Table responsive className='table table-hover'>
                                <thead className='table-active'>
                                    <tr>
                                        <th>No</th>
                                        <th>Image</th>
                                        <th>ServiceName</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders?.map((order, index) => <OrderRow
                                            key={order._id}
                                            index={index}
                                            order={order}
                                        ></OrderRow>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    )
                    :
                    (
                        <div className='text-center'>
                            <img src={orderGif} alt="OrderGif" className='order-gif' />
                            <Link to={'/dashboard'} className='text-decoration-none'>
                                <button
                                    style={{ backgroundColor: '#7AB259' }}
                                    className='button mx-auto fw-normal'
                                >
                                    Please Service Order <IoArrowForwardCircleOutline className='fs-5 ms-1 ' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </div>
    );
};

export default MyOrders;