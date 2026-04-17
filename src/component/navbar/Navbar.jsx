import React from 'react';
import './Navbar.css'
import { NavLink, useLocation } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";

const Navbar = () => {

    const location = useLocation();
    const isHomeActive = location.pathname === "/" || location.pathname === "/home";

    return (
        <div className=' border-b border-gray-200 py-2'>
            <div className='container mx-auto navbar'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <NavLink to="/" className="primary-color text-2xl max-sm:text-lg font-semibold">
                            Keen
                            <span className='scnd-color'>
                                Keeper
                            </span>
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className='flex gap-2 max-sm:gap-0 font-semibold'>
                            <NavLink
                                to="home"
                                className={`flex items-center gap-1 btn ${isHomeActive ? "btn-success" : "btn-ghost btn-success text-[#64748B]"
                                    }`}
                            >
                                <RiHome2Line />
                                Home
                            </NavLink>

                            <NavLink
                                to="timeline"
                                className={({ isActive }) =>
                                    `flex items-center gap-1 btn ${isActive ? "btn-success" : "btn-ghost btn-success text-[#64748B]"}`
                                }
                            >
                                <IoMdTime />
                                Timeline
                            </NavLink>

                            <NavLink
                                to="stats"
                                className={({ isActive }) =>
                                    `flex items-center gap-1 btn ${isActive ? "btn-success" : "btn-ghost btn-success text-[#64748B]"}`
                                }
                            >
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