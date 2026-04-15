import React, { use } from 'react';
import Friends from '../friends/Friends';

const User = ({ userPromise }) => {
    // console.log(userPromise);
    const friends = use(userPromise);
    // console.log(friends);

    return (
        <div className='mx-5'>
            <h1 className='font-semibold text-left text-2xl text-[#1F2937]'>Your Friends</h1>
            <Friends friends={friends}></Friends>
        </div>
    );
};

export default User;