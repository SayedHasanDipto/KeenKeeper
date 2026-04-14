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
                            <h2 className="text-center text-[#1F2937] font-semibold text-xl">{friend.name}</h2>
                            <p className='text-[#64748B] text-sm'>{friend.days_since_contact}d ago</p>
                            <div className="card-actions justify-center mb-2 items-center">
                                {
                                    friend.tags.map(tag => {
                                        return <button className="btn text-[16px] btn-soft btn-success rounded-full">{tag}</button>
                                    })
                                }
                            </div>
                            <div>
                                <button className={`btn text-[16px] rounded-full px-4 border-none ${friend.status === 'on-track'
                                    ? 'btn-success'
                                    : friend.status === 'overdue'
                                        ? 'btn-error'
                                        : 'btn-warning'
                                    }`}>
                                    {friend.status}
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div >
    );
};

export default Friends;