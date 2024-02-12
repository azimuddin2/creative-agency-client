import React, { useContext, useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import profileGif from '../../../../assets/images/profile.gif';
import { SlCloudUpload } from 'react-icons/sl';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import './EditProfile.css';
import useTitle from '../../../../hooks/useTitle';

const EditProfile = () => {
    useTitle('Edit Profile');
    const { user, updateUserProfile } = useContext(AuthContext);
    const [countries, setCountries] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const skills = [
        "Web & Mobile Design",
        "Graphic Design",
        "Web Development",
        "Content Writer",
        "UI/UX Design",
        "Responsive Web Design",
        "App Development",
        "MERN Stack Development",
        "Back-end Development",
        "Full Stack Development",
        "Front-end Development",
    ];

    const imageUploadToken = process.env.REACT_APP_Image_Upload_Token;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const education = form.education.value;
        const skill = form.skill.value;

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResult => {
                if (imageResult.success) {
                    const imageURL = imageResult.data.display_url;

                    // NOTE: user update information firebase save
                    handleUpdateUserProfile(name, imageURL);

                    //NOTE: user update information database save
                    const updateProfileData = {
                        image: imageURL,
                        email: user?.email,
                        name,
                        country,
                        education,
                        skill
                    };
                    fetch(`http://localhost:5000/users/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateProfileData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                form.reset();
                                toast.success('Profile updated successfully.');
                            }
                        })
                }
            })
    };

    const handleUpdateUserProfile = (name, imageURL) => {
        const profile = {
            displayName: name,
            photoURL: imageURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='form-section my-5'>
            <div className='form-image'>
                <img src={profileGif} alt="profile gif" className='mx-auto' />
            </div>
            <div className='mt-lg-3 bg-light p-4 pb-lg-4 p-lg-5 rounded-2'>
                <div className='position-relative mb-4'>
                    <div className='text-center'>
                        {
                            user.photoURL ?
                                (
                                    <img
                                        src={user.photoURL}
                                        alt="userImg"
                                        style={{ border: '4px solid #7AB259', borderRadius: '100%', width: '100px', height: '100px', }}
                                    />
                                )
                                :
                                (
                                    <h1
                                        className='d-flex align-items-center justify-content-center text-white mx-auto fw-normal '
                                        style={{ fontSize: '60px', backgroundColor: '#7AB259', borderRadius: '100%', width: '100px', height: '100px', }}
                                    >
                                        {user.displayName.slice(0, 1)}
                                    </h1>
                                )
                        }
                    </div>
                    <div className='edit-profile-icon'>
                        <CiEdit className='fs-5' />
                    </div>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input
                            onChange={handleFileChange}
                            name='image'
                            type="file"
                            className="form-control"
                            id="imageUpload"
                            required
                        />
                        <label style={{ backgroundColor: '#7AB259', color: 'white' }} className="input-group-text d-flex align-items-center" htmlFor="imageUpload">
                            <SlCloudUpload className='me-2 fs-5' />
                            <span>Upload image</span>
                        </label>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            defaultValue={user.displayName}
                            name='name'
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            defaultValue={user.email}
                            name='email'
                            type="email"
                            placeholder="Your Email"
                            disabled
                        />
                    </Form.Group>
                    <Form.Select
                        name='country'
                        aria-label="Default select example"
                        className='mb-3'
                    >
                        <option>Select Your Country</option>
                        {
                            countries.map(country => <option
                                key={country.cca3}
                                value={country.name.common}
                            >{country.name.common}</option>)
                        }
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEducation">
                        <Form.Control
                            name='education'
                            type="text"
                            placeholder="Your Education"
                            required
                        />
                    </Form.Group>
                    <Form.Select
                        name='skill'
                        aria-label="Default select example"
                        className='mb-3'
                    >
                        <option>Job Skills</option>
                        {
                            skills.map((skill, index) => <option
                                key={index}
                                value={skill}
                            >{skill}</option>)
                        }
                    </Form.Select>
                    <Button
                        className='submit-button py-2 text-uppercase fw-medium '
                        type="submit"
                    >
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile;