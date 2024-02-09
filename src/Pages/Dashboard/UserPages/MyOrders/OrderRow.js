import React from 'react';

const OrderRow = ({ index, order }) => {
    const { image, serviceName, price, name, email } = order;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={image} alt="" style={{ width: '44px' }} />
            </td>
            <td>{serviceName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td className=' fw-medium '>${price}</td>
            <td>
                <button
                    style={{ backgroundColor: '#7AB259' }}
                    className=' rounded-1 btn-success btn border-0 rounded'
                >
                    Pay
                </button>
            </td>
        </tr>
    );
};

export default OrderRow;