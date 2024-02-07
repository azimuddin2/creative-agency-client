import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import { Table } from 'react-bootstrap';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading, error } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = res.json();
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
            <h2 className='fs-3'>My Orders: 0{orders?.length}</h2>
            <div>
                <Table responsive className='table table-striped'>
                    <thead className=' table-success'>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Action</th>
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
        </div>
    );
};

export default MyOrders;