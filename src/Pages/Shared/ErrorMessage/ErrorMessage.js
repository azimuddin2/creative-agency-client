import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div>
            <p className='text-danger text-center fs-6 fw-medium'>error: {message}</p>
        </div>
    );
};

export default ErrorMessage;