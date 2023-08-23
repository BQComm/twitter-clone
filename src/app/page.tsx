import React from 'react'
import MainComponent from './components/MainComponent'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center bg-black items-center relative">
      <div className="w-full lg:max-w-[70vw] md:max-w-[100vw] h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  )
}
