import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import UserRow from './UserRow';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const AllUser = () => {
    useTitle('All User');
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: users = [], isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://creative-agency-server-ivory.vercel.app/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logOut();
                localStorage.removeItem('accessToken');
                navigate('/login');
            }
            const data = await res.json()
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
                <h2 className='fs-3 mb-3'>All Users: {users?.length}</h2>
                <Table responsive className='table'>
                    <thead className='table-active'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllUser;