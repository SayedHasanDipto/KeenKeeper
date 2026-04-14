import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { HiBellSnooze } from "react-icons/hi2";
import { FaArchive } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const friends = useLoaderData();
    // console.log(friends);

    const shouldBeFriends = friends.find(friend => friend.id == id)
    console.log(shouldBeFriends);

    return (
        <div className='w-6xl  pt-20 flex mx-auto'>
            <div className='space-y-4'>
                <div className='shadow w-96 bg-base-100 rounded-xl items-center flex justify-center gap-4 flex-col p-10'>
                    <div className='w-20'>
                        <img src={shouldBeFriends.picture} className='rounded-full' alt="" />
                    </div>
                    <h2 className="text-center text-[#1F2937] font-semibold text-xl">{shouldBeFriends.name}</h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-2'>
                            <button className={`btn text-[16px] rounded-full px-4 border-none ${shouldBeFriends.status === 'on-track'
                                ? 'btn-success'
                                : shouldBeFriends.status === 'overdue'
                                    ? 'btn-error'
                                    : 'btn-warning'
                                }`}>
                                {shouldBeFriends.status}
                            </button>
                        </div>
                        <div>
                            <div className="card-actions">
                                {
                                    shouldBeFriends.tags.map(tag => {
                                        return <button className="btn text-[16px] btn-outline btn-success rounded-full">{tag}</button>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[#64748B] text-center'><i>"{shouldBeFriends.bio}"</i></p>
                        <p className='text-[#64748B] text-center'>Preferred: {shouldBeFriends.email}</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <button className='btn h-12 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex font-base gap-1 items-center justify-center text-[#1F2937] font-medium'>
                                <HiBellSnooze />
                                Snooze 2 weeks
                            </h1>
                        </div>
                    </button>
                    <button className='btn h-12 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex font-base gap-1 items-center justify-center text-[#1F2937] font-medium'>
                                <FaArchive />
                                Archive
                            </h1>
                        </div>
                    </button>
                    <button className='btn h-12 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex gap-1 items-center justify-center text-red-600 font-medium'>
                                <ImBin />
                                Delete
                            </h1>
                        </div>
                    </button>

                </div>
            </div>
            <div>
                <h1>hi</h1>
            </div>
        </div>
    );
};

export default FriendDetails;