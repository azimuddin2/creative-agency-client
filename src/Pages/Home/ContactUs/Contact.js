import React from 'react';
import './Contact.css';
import contactUs from '../../../assets/images/contact-us.gif'
import toast from 'react-hot-toast';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;

        const contactInfo = {
            email,
            name,
            message
        };
        console.log(contactInfo);
        form.reset();
        toast.success('Your message has been sent successfully.');
    };

    return (
        <section id='contact' className='contact-section'>
            <div className='container'>
                <div className='contact-us'>
                    <div className='contact-info'>
                        <h2>Let us handle your project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        <div className=''>
                            <img className='contact-image ' src={contactUs} alt="" />
                        </div>
                    </div>
                    <div className='contact-field'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    id="email"
                                    placeholder="Your email address"
                                    required
                                />
                                <label htmlFor="floatingInput">Your email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control"
                                    id="name"
                                    placeholder="Your name / company’s name"
                                    required
                                />
                                <label htmlFor="floatingInput">Your name / company’s name</label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    name='message'
                                    className="form-control message"
                                    placeholder="message"
                                    id="floatingTextarea"
                                    required
                                ></textarea>
                                <label htmlFor="floatingTextarea">Your Message</label>
                            </div>
                            <input className='button mt-3' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;