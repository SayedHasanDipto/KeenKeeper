import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white text-center'>
            <div className='container mx-auto'>
                <div className='mb-10 pt-20'>
                    <div className='mb-6'>
                        <h1 className='mb-4 text-7xl font-semibold'>KeenKeeper</h1>
                        <p className='leading-6 text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>
                    <div>
                        <p className='text-xl leading-7 font-medium mb-4'>Social Links</p>
                        <div className='flex gap-4 items-center justify-center'>
                            <div className='text-black bg-white p-3 rounded-full'>
                                <a href=""></a>
                                <FaInstagramSquare />
                            </div>
                            <div className='text-black bg-white p-3 rounded-full'>
                                <a href="https://www.facebook.com/SayedHasanDipto25">
                                    <FaFacebookSquare />
                                </a>
                            </div>
                            <div className='text-black bg-white p-3 rounded-full'>
                                <a href="https://x.com/devsayedhasan">
                                    <FaSquareXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-5xl mx-auto'>
                    <div className='flex p-8 justify-between'>
                        <div>
                            <p className='text-[#d4d4d4]'>© 2026 KeenKeeper. All rights reserved.</p>
                        </div>
                        <div className='flex text-[#d4d4d4] gap-4'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;