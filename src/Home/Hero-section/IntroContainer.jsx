import React from 'react'
import { useLocation } from 'react-router-dom'
import loyaltybadge from '../../assets/loyaltybadge.svg'

const IntroContainer = () => {
  const location = useLocation()
  const name = location.state?.name || 'Guest'

  return (
    <div className="flex justify-between items-start p-5 mt-8">

      {/* Left - greeting */}
      <div className="flex flex-col p-5 m-0">
        <p className="text-base font-bold mb-2.5 text-[#1B1B1C] font-[Inter]">
  Welcome Back, {name}
</p>

        <div className="flex flex-col font-[Inter] text-sm text-[#3E4A3D]">
          <p className="m-0 text-base font-medium text-[#3E4A3D]">
            Your fresh harvest from Pokhara Valley is ready for tracking.
          </p>
        </div>
      </div>

      {/* Right - OSM Stars */}
      <div className="flex items-center gap-3.75">
        <div className="flex flex-col font-[Inter] text-sm text-[#3E4A3D]">
          <p className="m-0 text-base font-medium text-[#3E4A3D]">
            ONESTOPMART STARS
          </p>

          <h2 className="text-[#006B2C] font-bold ml-[20%] m-0">
            1234 POINTS
          </h2>
        </div>

        <img
          src={loyaltybadge}
          alt="Loyalty Badge"
          className="w-12.5 h-auto"
        />
      </div>

    </div>
  )
}

export default IntroContainer