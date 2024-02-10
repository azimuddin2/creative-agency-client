import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAdminer } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi2";
import swal from 'sweetalert';

const UserRow = ({ index, user, refetch }) => {
    const { name, email, role } = user;

    const handleMakeAdmin = (user) => {
        swal({
            title: "Are you sure?",
            text: `User Account ${user.email} Make Admin`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willMakeAdmin) => {
                if (willMakeAdmin) {
                    fetch(`http://localhost:5000/users/admin/${user._id}`, {
                        method: 'PATCH'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.modifiedCount) {
                                refetch();
                                swal({
                                    icon: 'success',
                                    title: `${user.email}`,
                                    text: `${user.name} is an admin now!`,
                                    timer: 5000
                                });
                            }
                        })
                }
            });
    };

    const handleDelete = (user) => {
        swal({
            title: "Are you sure?",
            text: `User account - ${user.email}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${user._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.deletedCount > 0) {
                                refetch();
                                swal({
                                    text: `${user.email} has been deleted!`,
                                    icon: 'success',
                                    timer: 5000
                                })
                            }
                        })
                }
            });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    role === "admin" ?
                        (
                            <div className='d-flex align-items-center'>
                                <SiAdminer className='fs-4 me-1 ' />
                                <span>Admin</span>
                            </div>
                        )
                        :
                        (
                            <button
                                onClick={() => handleMakeAdmin(user)}
                                className='btn btn-outline-dark  d-flex align-items-center'
                            >
                                <HiOutlineUser className='fs-4' />
                                <span>MakeAdmin</span>
                            </button>
                        )
                }
            </td>
            <td>
                <button
                    onClick={() => handleDelete(user)}
                    className='btn btn-outline-danger'
                >
                    <RiDeleteBin5Line className='fs-4' />
                </button>
            </td>
        </tr>
    );
};

export default UserRow;