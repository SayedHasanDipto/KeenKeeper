import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { HiBellSnooze } from "react-icons/hi2";
import { FaArchive } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineSms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const friends = useLoaderData();
    // console.log(friends);

    const shouldBeFriends = friends.find(friend => friend.id == id)
    console.log(shouldBeFriends);

    // React Tostify
    const call = () => {
        toast(`Call with ${shouldBeFriends.name}`);
        console.log("call clicked");
    }
    const text = () => toast(`Text with ${shouldBeFriends.name}`);
    const video = () => toast(`Video with ${shouldBeFriends.name}`);


    return (
        <div className='w-6xl mb-10 max-lg:w-full gap-5 max-sm:gap-2 max-sm:flex-col max-md:flex-col max-lg:flex-wrap pt-20 flex mx-auto'>
            <div className='space-y-4 max-lg:w-full mx-auto'>
                <div className='shadow w-80 max-lg:w-full mx-auto bg-base-100 rounded-xl items-center flex justify-center gap-4 flex-col p-8 max-sm:p-8'>
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
                                        return <button key={tag} className="btn text-[16px] btn-outline btn-success rounded-full">{tag}</button>
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
                <div className='space-y-3 w-80 max-lg:w-full mx-auto'>
                    <button className='btn h-15 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex font-base gap-1 items-center justify-center text-[#1F2937] font-medium'>
                                <HiBellSnooze />
                                Snooze 2 weeks
                            </h1>
                        </div>
                    </button>
                    <button className='btn h-15 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex font-base gap-1 items-center justify-center text-[#1F2937] font-medium'>
                                <FaArchive />
                                Archive
                            </h1>
                        </div>
                    </button>
                    <button className='btn h-15 hover:btn-success w-full rounded-lg bg-base-100'>
                        <div className='text-base'>
                            <h1 className='flex gap-1 items-center justify-center text-red-600 font-medium'>
                                <ImBin />
                                Delete
                            </h1>
                        </div>
                    </button>

                </div>
            </div>
            <div className='w-full max-sm:mt-10 mx-auto space-y-5 max-sm:w-72 max-lg:w-full mb-5'>
                <div className='flex justify-between gap-5 w-full mx-auto max-sm:flex-col'>
                    <div className='w-full h-ful bg-base-100 shadow rounded-lg text-center flex justify-center items-center flex-col p-6'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{shouldBeFriends.days_since_contact}</h1>
                        <p className='text-[#64748B] text-lg'>Days Since Contact</p>
                    </div>
                    <div className='w-full h-ful bg-base-100 shadow rounded-lg text-center flex justify-center items-center flex-col p-6'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{shouldBeFriends.goal}</h1>
                        <p className='text-[#64748B] text-lg'>Goal (Days)</p>
                    </div>
                    <div className='w-full h-ful bg-base-100 shadow rounded-lg text-center flex justify-center items-center flex-col p-6'>
                        <h1 className='text-3xl text-[#244D3F] font-semibold'>{shouldBeFriends.next_due_date}</h1>
                        <p className='text-[#64748B] text-lg'>Next Due</p>
                    </div>
                </div>
                <div className='w-full h-ful bg-base-100 p-6 shadow rounded-lg col-span-3 flex justify-between items-center'>
                    <div>
                        <h1 className='font-medium text-[#244D3F] text-xl mb-6'>Relationship Goal</h1>
                        <p className='font-medium text-[#64748B] text-lg'>Connects every
                            <span className='text-[#1F2937] font-bold'> {shouldBeFriends.days_since_contact} days</span>
                        </p>
                    </div>
                    <div>
                        <button className='btn'>Edit</button>
                    </div>
                </div>
                <div className='w-full h-ful bg-base-100 p-6 shadow rounded-lg col-span-3'>
                    <h1 className='font-medium text-[#244D3F] mb-4 text-xl'>Quick Check-In</h1>
                    <div className='grid grid-cols-3 gap-4'>
                        <button onClick={call} className='h-24 flex items-center flex-col text-[#1F2937] text-xl justify-center btn btn-success btn-soft rounded-lg'>
                            <TbPhoneCall />
                            <h1>Call</h1>
                        </button>
                        <button onClick={text} className='h-24 flex items-center flex-col text-[#1F2937] text-xl justify-center btn btn-success btn-soft rounded-lg'>
                            <MdOutlineSms />
                            <h1>Text</h1>
                        </button>
                        <button onClick={video} className='h-24 flex items-center flex-col text-[#1F2937] text-xl justify-center btn btn-success btn-soft rounded-lg'>
                            <FiVideo />
                            <h1>Video</h1>
                        </button>
                        <ToastContainer />

                    </div>
                </div>
            </div>
        </div >
    );
};

export default FriendDetails;