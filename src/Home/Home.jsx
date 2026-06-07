import React from 'react'
import Nav_bar from './Nav_bar'
import Dashboard from './Dashboard/Dashboard'
import RenderHero from './Hero-section/RenderHero'

const Home = () => {
  return (
    <div className='Home'>
    <Nav_bar/>
    <Dashboard />
    <RenderHero />
    </div>
  )
}

export default Home
