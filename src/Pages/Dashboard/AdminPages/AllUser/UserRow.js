import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAdminer } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi2";

const UserRow = ({ user, index }) => {
    const { name, email, role } = user;

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
                            <button className='btn btn-outline-dark  d-flex align-items-center'>
                                <HiOutlineUser className='fs-4' />
                                <span>MakeAdmin</span>
                            </button>
                        )
                }
            </td>
            <td>
                <button className='btn btn-outline-danger'>
                    <RiDeleteBin5Line className='fs-4' />
                </button>
            </td>
        </tr>
    );
};

export default UserRow;