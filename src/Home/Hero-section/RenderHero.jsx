import React from 'react'
import SideBar from '../Dashboard/SideBar'
import IntroContainer from './IntroContainer'
import OrderCard from './OrderCard'
import ProfileCard from './ProfileCard'

const RenderHero = () => {
  return (
    <div className="flex min-h-screen gap-8 bg-gray-50">
      <aside className="w-1/6 sticky top-0 h-screen overflow-y-auto">
        <SideBar />
      </aside>
      
      <main className="flex-1 px-8 py-8 flex flex-col gap-8">
        <IntroContainer />

        <div className="flex gap-8 w-full">
          <div className="w-[60%]">
            <OrderCard />
          </div>

          <div className="w-[40%]">
            <ProfileCard />
          </div>
        </div>
      </main>
    </div>
  )
}

export default RenderHero