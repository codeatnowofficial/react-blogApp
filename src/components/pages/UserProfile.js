import React from 'react'
import { NavLink } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className='h-screen bg-violet-50'>
      <div className='pt-16 sm:pt-20 bg-violet-50'>
        <div className='px-4 sm:px-8 py-8 h-auto'>
          <NavLink to='/' className='border border-violet-400 px-4 py-2 rounded-md text-md hover:text-white hover:bg-violet-500 transition ease'>Back To Home</NavLink>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile