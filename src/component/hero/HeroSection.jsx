import React from 'react';
import { IoAddOutline } from "react-icons/io5";


const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-96">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn btn-success text-white"><IoAddOutline />
                            Add a Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;