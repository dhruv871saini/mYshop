import React from 'react';
import './ContactForm.css'; // Custom CSS for additional styling
import { toast } from 'react-toastify';
import Nav from '../nav/Nav';

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        toast.success("Successfully submitted the form");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="sticky-top-nav"><Nav /></div>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img
                                className="width_100_img"
                                src={`${process.env.PUBLIC_URL}/images/download.png`}
                                alt="Contact Us Illustration"
                            />
                            <div className="mx-5 px-5 ">
                                <br />
                                <div className="d-flex">
                                
                                    <div className="mx-3 text-center">
                                        <a href="https://www.facebook.com/dhruv.saini.1293/" target="_blank" rel="noopener noreferrer">
                                            <img className="icon-logo" src={`${process.env.PUBLIC_URL}/images/download (1).png`} alt="Facebook Icon" />
                                        </a> <br/>
                                        <span> Facebook</span>
                                    </div>
                                    <div className="mx-3 text-center">
                                        <a href="https://github.com/dhruv871saini" target="_blank" rel="noopener noreferrer">
                                            <img className="icon-logo" src={`${process.env.PUBLIC_URL}/images/Github_icon-icons.com_66788.png`} alt="GitHub Icon" />
                                        </a>
                                        GITHUB
                                    </div>
                                    <div className="mx-3 text-center">
                                        <a href="https://www.instagram.com/dhruv__saini_/" target="_blank" rel="noopener noreferrer">
                                            <img className="icon-logo" src={`${process.env.PUBLIC_URL}/images/Instagram_icon-icons.com_66804.png`} alt="Instagram Icon" />
                                        </a>
                                        INSTAGRAM
                                    </div>
                                  
                                </div>
                                <div class="d-flex text-center mx-5">
                                <div className="mx-3 text-center">
                                        <a href="https://www.linkedin.com/in/dhruv-saini-a88482241/" target="_blank" rel="noopener noreferrer">
                                            <img className="icon-logo" src={`${process.env.PUBLIC_URL}/images/LinkedIn_logo_initials.png`} alt="LinkedIn Icon" />
                                        </a>
                                        LINKEDIN
                                    </div>
                                    <div className="mx-3 text-center">
                                        <a href="https://www.youtube.com/channel/UC9Kig_7X95luVYcz9izfE2Q" target="_blank" rel="noopener noreferrer">
                                            <img className="icon-logo" src={`${process.env.PUBLIC_URL}/images/Youtube_icon-icons.com_66802.png`} alt="YouTube Icon" />
                                        </a>
                                        YOUTUBE
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3"></div> */}
                        <div className="col-md-6">
                            <div>
                                <h2 className="text-center mb-4 text-primarys fw-bold display-5">Contact Us</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="formName" className="form-label text-primarys fw-bold fs-5">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formName"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formEmail" className="form-label text-primarys fw-bold fs-5">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="formEmail"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formPhone" className="form-label text-primarys fw-bold fs-5">Phone number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="formPhone"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formMessage" className="form-label text-primarys fw-bold fs-5">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="formMessage"
                                            rows="4"
                                            placeholder="Enter your message"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
