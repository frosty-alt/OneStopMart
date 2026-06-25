import React from 'react'
import SideBar from '../Dashboard/SideBar'
import IntroContainer from './IntroContainer'
import OrderCard from './OrderCard'
import ProfileCard from './ProfileCard'
const RenderHero = () => {
  return (
<div className="flex min-h-screen gap-8">
  <aside className="w-1/6">
    <SideBar />
  </aside>
<main className="flex-1 px-8 pb-8 pt-8 flex flex-col gap-8 w-full">
  <IntroContainer />

  <div className="flex flex-col md:flex-row gap-8 w-full">
    <OrderCard className="flex-1" />
    <ProfileCard className="flex-1" />
  </div>

</main>

</div>)
}

export default RenderHero
 