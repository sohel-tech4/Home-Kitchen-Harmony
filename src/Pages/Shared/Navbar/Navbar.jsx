import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPhone, FaPinterestP, FaTwitter } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div>
                <div className='flex gap-5'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGooglePlusG />
                    <FaLinkedinIn />
                    <FaPinterestP />
                </div>
                <div className='flex gap-2'>
                    <FaPhone />
                    <p>Call Us:</p>
                    <p>1-888-345-6789</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;