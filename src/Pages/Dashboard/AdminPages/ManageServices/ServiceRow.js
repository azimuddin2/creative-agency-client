import React, { useContext, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IoArrowForwardOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import EditServiceModal from '../EditServiceModal/EditServiceModal';

const ServiceRow = ({ index, service, refetch }) => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const { image, name, price, description } = service;
    const [isReadMore, setIsReadMore] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleDelete = (service) => {
        swal({
            title: "Are you sure?",
            text: `Service Name - ${service.name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/services/${service._id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                logOut();
                                localStorage.removeItem('accessToken');
                                navigate('/login');
                            }
                            return res.json()
                        })
                        .then(result => {
                            if (result.deletedCount > 0) {
                                refetch();
                                swal({
                                    text: `Service ${service.name} has been deleted!`,
                                    icon: 'success',
                                    timer: 5000
                                })
                            }
                        })
                }
            })
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
                    onClick={handleShow}
                    className='btn btn-sm me-3 mb-1 '
                    style={{ backgroundColor: '#7AB259', color: 'white' }}
                    title='Edit'
                >
                    <TbEdit className='fs-5' />
                </button>
                <button
                    onClick={() => handleDelete(service)}
                    className='btn btn-sm btn-danger border-0'
                    title='Delete'
                >
                    <RiDeleteBin5Line className='fs-5' />
                </button>
            </td>
            <EditServiceModal
                service={service}
                showModal={showModal}
                handleClose={handleClose}
            ></EditServiceModal>
        </tr>
    );
};

export default ServiceRow;