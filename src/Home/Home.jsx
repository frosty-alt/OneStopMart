import React from 'react'
import Nav_bar from './Nav_bar'

import RenderHero from './Hero-section/RenderHero'
const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav_bar />
      <RenderHero />
    </div>
  )
}

export default Home
