import React from 'react';
import { useOutletContext } from 'react-router';

const Timeline = () => {

    const [sharedData] = useOutletContext();

    return (
        <div className="p-5">
            <h2>Timeline</h2>
            {sharedData ? (
                <div className="alert alert-success">
                    <p>রিসিভ করা নাম: {sharedData.name}</p>
                    <p>মেসেজ: {sharedData.message}</p>
                </div>
            ) : (
                <p>এখনো কোনো ডেটা আসেনি।</p>
            )}
        </div>
    );
};

export default Timeline;