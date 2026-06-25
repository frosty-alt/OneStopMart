import React from 'react'

const ProfileCard = () => {
  return (
    <div className="p-5 bg-white rounded-2xl flex-1 w-full h-86.25 flex flex-col items-center gap-2.5">
      
      <small className="font-[Inter] text-base">
        Current Delivery
      </small>

      <h2 className="font-[Inter] text-base">
        ORDER-ID
      </h2>

      <p>#EF-98234-PKH</p>

      <p>
        Status: <span className="text-green-600">On the way</span>
      </p>

    </div>
  )
}

export default ProfileCard