import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaHeart, FaLinkedinIn, FaPhone, FaPinterestP, FaRegCircle, FaRegDotCircle, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='md:flex justify-between'>
            <div className='flex justify-center items-center gap-10'>
                <div className='flex gap-5'>
                    <Link><FaFacebookF /></Link>
                    <Link><FaTwitter /></Link>
                    <Link><FaGooglePlusG /></Link>
                    <Link><FaLinkedinIn /></Link>
                    <Link><FaPinterestP /></Link>                    
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <FaPhone />
                    <p>Call Us:</p>
                    <p className='font-bold'>1-888-345-6789</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="dropdown dropdown-hover">
                    <Link tabIndex={0} role="" className="flex justify-center hover:text-red-500 items-center gap-2"><FaUser/> My Account</Link>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 border-gray-100 border-2 shadow bg-base-100 rounded-md w-40">
                        <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>Login</a></Link>
                        <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>Wishlist</a></Link>
                        <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>My Cart</a></Link>
                        <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>My Account</a></Link>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div> 
                <div>
                <Link><a className='hover:text-red-500 text-md flex items-center gap-2' href=""><p className='text-sm'><FaHeart /></p>My Wishlist</a></Link>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;