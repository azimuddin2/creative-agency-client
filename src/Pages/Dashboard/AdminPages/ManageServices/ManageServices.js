import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import ServiceRow from './ServiceRow';
import { Table } from 'react-bootstrap';
import './ManageServices.css';
import useTitle from '../../../../hooks/useTitle';

const ManageServices = () => {
    useTitle('Manage Services');
    const { data: services = [], isLoading, error, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
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
            <div className='px-2 width'>
                <h2 className='fs-3 mb-3'>Manage Services: 0{services?.length}</h2>
                <Table responsive className='table'>
                    <thead className='table-active'>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services?.map((service, index) => <ServiceRow
                                key={service._id}
                                index={index}
                                service={service}
                                refetch={refetch}
                            ></ServiceRow>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageServices;