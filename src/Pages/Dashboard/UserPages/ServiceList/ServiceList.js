import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import ServiceCol from './ServiceCol';
import './ServiceList.css';

const ServiceList = () => {

    const { data: services = [], isLoading, error } = useQuery({
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
            <h2 className='service-title'>Provide Awesome <span>Services</span></h2>
            <div className='service-list mt-5'>
                {
                    services?.map(service => <ServiceCol
                        key={service._id}
                        service={service}
                    ></ServiceCol>)
                }
            </div>
        </div>
    );
};

export default ServiceList;