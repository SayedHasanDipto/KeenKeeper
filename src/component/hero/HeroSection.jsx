import React from 'react';
import { IoAddOutline } from "react-icons/io5";


const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-96">
                <div className="hero-content container text-center mt-20 flex-col">
                    <div className='mb-16'>
                        <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn btn-success text-white"><IoAddOutline />
                            Add a Friend</button>
                    </div>
                    <div className='grid grid-cols-4 gap-4 justify-evenly w-340'>
                        <div className='p-8 bg-white rounded-xl w-70 h-37 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>12</h1>
                            <p className='text-lg text-[#64748B]'>Total Friends</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-70 h-37 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>6</h1>
                            <p className='text-lg text-[#64748B]'>On Track</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-70 h-37 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>5</h1>
                            <p className='text-lg text-[#64748B]'>Need Attention</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-70 h-37 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>12</h1>
                            <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;