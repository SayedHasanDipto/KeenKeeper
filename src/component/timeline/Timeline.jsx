import React from 'react';
import { useOutletContext } from 'react-router';
import CallPng from '../../assets/call.png';
import VideoPng from '../../assets/video.png';
import TextPng from '../../assets/text.png';

const Timeline = () => {

    const [timelineData] = useOutletContext();

    return (
        <div className="p-5">
            <div className='mt-20 w-6xl mx-auto'>
                <h2 className='text-[#1F2937] text-5xl font-bold mb-6'>Timeline</h2>

                {/* Eita DropDown Menu */}

                <div className="dropdown w-full max-w-86.79 mb-6">
                    <div
                        tabIndex={0}
                        role="button"
                        className="border border-gray-300 rounded-lg p-4 flex justify-between items-center bg-white text-gray-500 w-full"
                    >
                        <span>Filter timeline</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-full mt-1">
                        <li><a>All Activity</a></li>
                        <li><a>Meetups</a></li>
                        <li><a>Texts</a></li>
                        <li><a>Videos</a></li>
                    </ul>
                </div>



                {/* Eikhane ami amr data jeta recive korsi oita use kormu */}

                {timelineData.map((data, index) => (
                    <div key={index} className="p-4 flex gap-4 items-center bg-base-100 shadow mb-4 rounded-lg">
                        <img
                            src={
                                data.actionType.toLowerCase() === 'call'
                                    ? CallPng
                                    : data.actionType.toLowerCase() === 'video'
                                        ? VideoPng
                                        : TextPng
                            }
                            alt="icon"
                            className="w-12 h-12"
                        />

                        <div className="space-y-1">
                            <h3 className="text-xl text-[#64748B]">
                                <span className='text-[#244D3F] font-bold'>{data.actionType}</span> with {data.name}
                            </h3>
                            <p className="text-gray-500">{data.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;