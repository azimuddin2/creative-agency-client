import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import { useQuery } from '@tanstack/react-query';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';
import Loading from '../../Shared/Loading/Loading';

const Services = () => {

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
        <div id='services' className='container'>
            <h2 className='service-title'>Provide awesome <span>services</span></h2>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;