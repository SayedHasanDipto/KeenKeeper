import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className=' border-b border-gray-200 py-2'>
            <div className='container mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <NavLink to="/" className="primary-color text-2xl font-semibold">
                            Keen
                            <span className='scnd-color'>
                                Keeper
                            </span>
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className='flex gap-4 font-semibold'>
                            <NavLink to="/home" className="flex items-center gap-1 btn btn-success">
                                <RiHome2Line />
                                Home
                            </NavLink>
                            <NavLink to="/timeline" className="flex items-center gap-1 btn btn-success btn-ghost hover:text-black text-[#64748B]">
                                <IoMdTime />
                                Timeline
                            </NavLink>
                            <NavLink to="/stats" className="flex items-center gap-1 btn btn-success btn-ghost hover:text-black text-[#64748B]">
                                <FaChartLine />
                                Stats
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;