import React from 'react';
import { useOutletContext } from 'react-router';
import { ToolTips } from 'rechart';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
    const [timelineData] = useOutletContext();

    const callCount = timelineData.filter(item => item.actionType === 'Call').length;
    const textCount = timelineData.filter(item => item.actionType === 'Text').length;
    const videoCount = timelineData.filter(item => item.actionType === 'Video').length;

    const data = [
        { name: "Text", value: textCount, fill: "#0B666A" },
        { name: "Call", value: callCount, fill: "#7132CA" },
        { name: "Video", value: videoCount, fill: "#54C392" },
    ];



    return (
        <div className='w-6xl mx-auto pt-20'>
            <div className='mb-6'>
                <h1 className='text-[#1F2937] text-5xl font-bold'>Friendship Analytics</h1>
            </div>
            <div className='spacey-6 p-8 shadow bg-base-100 rounded-lg'>
                <h1 className='text-xl text-[#244D3F] font-bold mb-10'>By Interaction Type</h1>
                <div className='flex justify-center items-center mb-8'>
                    <PieChart style={{ width: '100%', maxWidth: '200px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>

        </div >
    );
};

export default Stats;