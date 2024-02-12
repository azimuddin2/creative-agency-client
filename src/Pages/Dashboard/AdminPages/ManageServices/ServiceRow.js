import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IoArrowForwardOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

const ServiceRow = ({ index, service }) => {
    const { image, name, price, description } = service;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={image} alt={name} style={{ width: '44px' }} />
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                {isReadMore ? description?.slice(0, 30) : description}
                <div onClick={toggleReadMore} className='d-inline'>
                    {
                        isReadMore ?
                            (
                                <p style={{ cursor: 'pointer' }} className='d-inline'>
                                    <span style={{ color: '#7AB259', fontWeight: '500', marginRight: '1px' }}>...read more</span>
                                    <IoArrowForwardOutline style={{ color: '#7AB259' }} />
                                </p>
                            )
                            :
                            (
                                <p style={{ cursor: 'pointer' }} className='d-inline '>
                                    <span style={{ color: '#7AB259', fontWeight: '500', marginRight: '1px' }}> show less</span>
                                    <IoArrowForwardOutline style={{ color: '#7AB259' }} />
                                </p>
                            )
                    }
                </div>
            </td>
            <td>
                <button
                    className='btn btn-sm me-3 mb-1 '
                    style={{ backgroundColor: '#7AB259', color: 'white' }}
                    title='Edit'
                >
                    <TbEdit className='fs-5' />
                </button>
                <button
                    className='btn btn-sm btn-danger border-0'
                    title='Delete'
                >
                    <RiDeleteBin5Line className='fs-5' />
                </button>
            </td>
        </tr>
    );
};

export default ServiceRow;