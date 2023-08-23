import Link from 'next/link'
import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsThreeDots, BsTwitter, BsEnvelope} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiHomeCircle
  }, 
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

export default function LeftSidebar() {
    return (
        <div className="">
        {/* left-section */}
          <section className='w-[23%] flex flex-col items-stretch justify-center h-screen p-2 sticky top-0'>
            <div className='flex flex-col max-w-screen-xl h-full items-stretch space-y-4 mt-4'>
                <Link href='/' className='py-2 px-6 text-lg'>
                    <BsTwitter />
                </Link>
                {
                NAVIGATION_ITEMS.map((item)=>(
                    <Link 
                    className='hover:bg-white/10 text-3xl transition duration-200 flex items-center justify-start space-x-4 rounded-3xl w-fit py-2 px-6' 
                    href={`/${item.title.toLowerCase()}`} 
                    key={item.title}>
                    <div className="">
                        <item.icon />
                    </div>
                    <div className="">
                        {item.title}
                    </div>
                    </Link>
                ))
                }
              <div className="flex w-full items-stretch">
              <button className='rounded-full bg-primary px-6 py-4 text-2xl hover:bg-opacity-70 transition duration-200'>
                      Tweet
                  </button>
              </div>
            </div>
            <div className="flex w-full items-stretch">
                      <div className='rounded-full cursor-pointer flex items-center text-center justify-between bg-transparent space-x-2 p-2 hover:bg-gray transition duration-200'>
                        <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-gray border-solid border-white border-[1px] w-12 h-12"></div>
                                <div className="text-left text-sm">
                                    <div className="font-semibold">Bryan_Quiroz</div>
                                    <div className="">@MrB</div>
                                </div>
                        </div>
                        <div className="">
                            <BsThreeDots />
                        </div>
                      </div>
            </div>
          </section>
        </div>
    
    )
  }