import React from 'react';

const Friends = ({ friends }) => {
    console.log(friends);
    return (
        <div className='grid grid-cols-4 gap-10 mt-8'>
            {
                friends.map(friend => {
                    return <div key={friend.id} className="card bg-base-100 w-70 hover:-translate-y-3 transition delay-75 duration-300 ease-in-out shadow">
                        <div className="card-body p-6 text-center flex items-center justify-center">
                            <div className='w-20'>
                                <img src={friend.picture} className='rounded-full' alt="friendImg" />
                            </div>
                            <h2 className="text-center">{friend.name}</h2>
                            <p>62d ago</p>
                            <div className="card-actions justify-center flex-col items-center">
                                <button className="btn">Buy Now</button>
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Friends;