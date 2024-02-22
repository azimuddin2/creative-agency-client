import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const ServiceRow = ({ index, service }) => {
    const { image, name, price, description } = service;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={image} alt={name} style={{ width: '44px' }} />
            </td>
            <td>{name}</td>
            <td className=' fw-medium '>${price}</td>
            <td>
                {isReadMore ? description?.slice(0, 40) : description}
                <span onClick={toggleReadMore}>
                    {
                        isReadMore ?
                            <span style={{ cursor: 'pointer' }}>
                                <span style={{ color: '#7ac948', fontWeight: '500', marginRight: '5px' }}>...read more</span>
                                <BsArrowRightCircleFill style={{ color: '#7ac948' }}></BsArrowRightCircleFill>
                            </span>
                            :
                            <span style={{ cursor: 'pointer' }}>
                                <span style={{ color: '#7ac948', fontWeight: '500', marginRight: '5px' }}>show less</span>
                                <BsArrowRightCircleFill style={{ color: '#7ac948' }}></BsArrowRightCircleFill>
                            </span>
                    }
                </span>
            </td>
            <td>
                <button
                    // onClick={() => handleDelete(user)}
                    className='btn btn-sm btn-danger'
                >
                    <RiDeleteBin5Line className='fs-5' />
                </button>
            </td>
        </tr>
    );
};

export default ServiceRow;