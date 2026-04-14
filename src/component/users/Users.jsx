import React, { Suspense } from 'react';
import User from '../user/User';

const userFetch = async () => {
    const res = await fetch('/userdata.json');
    return res.json();
}

const Users = () => {

    const userPromise = userFetch();

    return (
        <div className='w-340 mt-10 mb-20 mx-auto'>
            <Suspense fallback={<div>
                <span className="loading loading-ring loading-xl"></span><span className="loading loading-ring loading-xl"></span><span className="loading loading-ring loading-xl"></span>
            </div>
            }>
                <User userPromise={userPromise}></User>
            </Suspense>
        </div>
    );
};

export default Users;