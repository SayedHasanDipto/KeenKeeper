import React from 'react';
import { IoAddOutline } from "react-icons/io5";


const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-96">
                <div className="hero-content container text-center my-20 flex-col">
                    <div>
                        <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn btn-success text-white"><IoAddOutline />
                            Add a Friend</button>
                    </div>
                    <div className='mt-10 grid max-sm:grid-cols-1 gap-10 max-lg:grid-cols-2 grid-cols-4 max-md:gap-2 max-sm:gap-5 w-full mx-auto'>
                        <div className='p-8 bg-white rounded-xl w-full h-40 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>12</h1>
                            <p className='text-lg text-[#64748B]'>Total Friends</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-full h-40 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>6</h1>
                            <p className='text-lg text-[#64748B]'>On Track</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-full h-40 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>5</h1>
                            <p className='text-lg text-[#64748B]'>Need Attention</p>
                        </div>
                        <div className='p-8 bg-white rounded-xl w-full h-40 flex items-center justify-center flex-col hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow'>
                            <h1 className='text-[#244D3F] text-3xl font-semibold'>12</h1>
                            <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;