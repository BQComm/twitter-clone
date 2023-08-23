'use client'
import React from 'react'
import LeftSidebar from './LeftSidebar'
import {BsChat, BsDot, BsHeart, BsEyeFill, BsThreeDots} from 'react-icons/bs'
import {FaRetweet} from 'react-icons/fa'
import {FiShare} from 'react-icons/fi'

export default function MainComponent() {
    return (
      <div className="">
        <div className="">
        {/* main page */}
        <main className='flex flex-col w-[35vw] h-full min-h-screen border-gray border-r-[0.5px] border-l-[0.5px]'>
        <div className="text-xl font-bold p-6 sticky bg-black/10 backdrop-blur top-0">
         <h1 className=''>Home</h1>
        </div>
         <div className="border-t-[0.5px] flex items-stretch space-x-2 p-4 border-b-[0.5px] border-gray relative">
          <div className="w-10 h-10 rounded-full bg-gray border-solid"></div>
          <div className="flex flex-col w-full h-full">
            <div className="outline-none">
              <input type="text" 
              className='w-full h-full bg-transparent border-gray p-4 outline-none placeholder:text-xl' 
              placeholder="what's happening?" />
            </div>
            <div className="w-full justify-between items-center flex">
              {/* <div className=""></div> */}
              <div className="w-full max-w-[100px]">
                <button className='rounded-full bg-primary px-6 py-2 text-lg font-bold hover:bg-opacity-70 transition duration-200'>
                        Tweet
                </button>
              </div>
            </div>
          </div>
         </div>
         <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
              key={i}
              className="border-b-[0.5px] border-gray p-4 flex space-x-4">
                <div className="">
                  <div className="w-10 h-10 bg-gray rounded-full" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1 w-full">
                    <div className="font-bold">Bryan_Quiroz</div>
                    <div className="text-white/50">@MrB</div>
                    <div className="text-white/50">
                      <BsDot />
                    </div>
                    <div className="text-white/50">1 hour ago</div>
                    </div>
                    <div className=""><BsThreeDots/></div>
                  </div>
                <div className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis fugit. Exercitationem eveniet cum architecto modi fugit animi, ullam perspiciatis enim sed, eaque delectus id consequuntur voluptatum adipisci quam possimus.
                </div>
                <div className="bg-gray aspect-square w-full h-96 rounded-xl mt-2 my-2"></div>
                {/* Tweet reactive-buttons - flex */}
                <div className="flex items-center justify-evenly space-x-20 mt-4 w-full">
                  <div className="rounded-full hover:bg-white/50 p-2 cursor-pointer transition duration-200">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/50 p-2 cursor-pointer transition duration-200">
                    <FaRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/50 p-2 cursor-pointer transition duration-200">
                    <BsHeart />
                  </div>
                  <div className="rounded-full hover:bg-white/50 p-2 cursor-pointer transition duration-200">
                    <BsEyeFill />
                  </div>
                  <div className="rounded-full hover:bg-white/50 p-2 cursor-pointer transition duration-200">
                    <FiShare />
                  </div>
                </div>
                </div>
              </div>
            ))}
         </div>
        </main>
        </div>
      </div>
    )
  }