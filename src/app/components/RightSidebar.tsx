'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'


export default function RightSidebar() {
    return (
    <section className='w-[23%] h-full flex flex-col items-stretch justify-center min-h-screen sticky top-0 p-2'>
    <div className="">
    <div className="relative w-full group">
    <input 
        id='searchBox'
        type="text" 
        placeholder="Search twitter"
        className='outline-none focus:border-primary focus:border bg-gray w-full h-full rounded-full py-4 pl-14 pr-4' />
        <label htmlFor="searchBox" 
        className='absolute top-0 left-0 h-full flex items-center justify-center p-4 text-white/50 peer-focus:text-primary'>
        <BiSearch className='w-5 h-5' />
        </label>
    </div>
    </div>
    <div className="flex">
    <div className="flex flex-col bg-gray/20 rounded-xl p-4 my-4">
    <h3 className='font-bold text-2xl my-4'>What's happening?</h3>
        <div className="">
        {Array.from({ length: 5 }).map((_, i) => (
            <div className="hover:bg-white/10 p-2 rounded-md cursor-pointer mt-1 transition duration-200" key={i}>
            <div className="font-bold text-lg">trending ${1 + i}</div>
            <div className="text-xs text-gray">3.5 K</div>
            </div>
        ))}
        </div>
    </div>
    </div>
    <div className="flex">
    <div className="flex flex-col bg-gray/20 rounded-xl p-4 my-4">
    <h3 className='font-bold text-2xl my-4'>Who to folllow? 🤩</h3>
        {Array.from({ length: 4 }).map((_, i) => (
    <div className="flex w-full items-stretch">
    <div className='rounded-lg cursor-pointer m-1 flex items-center text-center justify-between bg-transparent space-x-2 p-2 hover:bg-white/20 transition duration-200'>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-gray border-solid border-white border-[1px] w-12 h-12"></div>
                <div className="text-left text-sm">
                    <div className="font-semibold">Bryan_Quiroz</div>
                    <div className="">@MrB</div>
                </div>
        </div>
        <button className='rounded-full bg-white text-gray font-bold px-4 py-2 text-sm hover:bg-opacity-70 transition duration-200'>
                follow
            </button>
    </div>
    </div>
        ))}

    </div>
    </div>
    </section>
)}