import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className='text-decoration-none ps-2 d-flex align-items-center'
            style={{
                borderLeft: match ? '3px solid #7AB259' : 'none',
                color: match ? '#7AB259' : '#111430',
                fontWeight: '500',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;