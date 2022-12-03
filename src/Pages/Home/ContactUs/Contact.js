import React from 'react';
import './Contact.css';
import contactUs from '../../../assets/images/contact-us.gif'

const Contact = () => {
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
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Your email address" required/>
                                <label for="floatingInput">Your email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Your name / company’s name" required/>
                                <label for="floatingInput">Your name / company’s name</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control message" placeholder="message" id="floatingTextarea" required></textarea>
                                <label for="floatingTextarea">Your Message</label>
                            </div>
                            <input className='button' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;