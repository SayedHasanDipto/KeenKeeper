import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import CallPng from '../../assets/call.png';
import VideoPng from '../../assets/video.png';
import TextPng from '../../assets/text.png';

const Timeline = () => {
    const [timelineData, setTimelineData] = useOutletContext();
    const [filter, setFilter] = useState('All Activity');
    const [isOpen, setIsOpen] = useState(false);

    const filteredData = timelineData.filter((item) => {
        if (filter === 'All Activity') return true;
        return item.actionType.toLowerCase() === filter.toLowerCase();
    });

    const handleOptionClick = (opt) => {
        if (opt !== 'All Activity') {
            const newActivity = {
                actionType: opt,
                name: "New Interaction",
                time: new Date().toLocaleDateString()
            };
            setTimelineData([...timelineData, newActivity]);
        }
        setFilter(opt);
        setIsOpen(false);
    };

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-[#1F2937]">Timeline</h2>

            <div className="relative mb-8 w-full max-w-xs">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full rounded-lg p-3 flex justify-between items-center bg-white shadow-sm text-gray-600"
                >
                    {filter}
                    <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>

                {isOpen && (
                    <ul className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
                        {['All Activity', 'Call', 'Video', 'Text'].map((opt) => (
                            <li
                                key={opt}
                                onClick={() => {
                                    handleOptionClick(opt);
                                    setFilter(opt);
                                    setIsOpen(false);
                                }}
                                className="p-3 hover:bg-gray-100 cursor-pointer shadow"
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="space-y-4">
                {filteredData.length > 0 ? (
                    filteredData.map((data, index) => (
                        <div key={index} className="p-4 flex gap-4 items-center bg-white shadow-sm rounded-xl">
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
                                <h3 className="text-xl font-medium">
                                    <span className="font-bold text-[#244D3F]">{data.actionType}</span> with {data.name}
                                </h3>
                                <p className="text-sm text-gray-500">{data.timestamp}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center py-10">No activities found.</p>
                )}
            </div>
        </div>
    );
};

export default Timeline;