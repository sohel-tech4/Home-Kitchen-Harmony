import React from 'react';
import { FaCaretDown, FaFacebookF, FaGooglePlusG, FaHeart, FaLinkedinIn, FaPhone, FaPinterestP, FaRegCircle, FaRegDotCircle, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import {logo} from '../../../../public/Logo1.PNG'
const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto md:flex justify-between'>
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
                        <Link tabIndex={0} role="" className="flex justify-center hover:text-red-500 items-center gap-2"><p className='text-xs'><FaUser /></p> My Account <FaCaretDown /></Link>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 border-gray-100 border-2 shadow bg-base-100 rounded-md w-40">
                            <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>Login</a></Link>
                            <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>Wishlist</a></Link>
                            <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>My Cart</a></Link>
                            <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>My Account</a></Link>
                        </ul>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <Link><a className='hover:text-red-500 text-md flex items-center gap-2' href=""><p className='text-sm'><p className='text-xs'><FaHeart /></p></p>My Wishlist</a></Link>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="dropdown dropdown-hover">
                        <Link tabIndex={0} role="" className="flex justify-center hover:text-red-500 items-center gap-2">English<FaCaretDown /></Link>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 border-gray-100 border-2 shadow bg-base-100 rounded-md w-40">
                            <Link><a className='hover:text-red-500 flex items-center gap-2' href=""><p className='text-xs'><FaRegCircle /></p>Bengali</a></Link>

                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src='https://i.ibb.co/Y4gW57p/Logo1.png' alt="" />
            </div>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </div>
    );
};

export default Navbar;