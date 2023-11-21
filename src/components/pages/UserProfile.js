import { Label, TextInput } from 'flowbite-react'
import React from 'react'
import { HiMail } from 'react-icons/hi';
import { NavLink } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className='h-full bg-violet-50'>
      <div className='bg-violet-50 mt-20 mb-10'>
        <div className='px-4 py-8 h-auto'>
          <NavLink to='/' className='border border-violet-400 px-4 py-2 rounded-md text-md hover:text-white hover:bg-violet-500 transition ease'>Back To Home</NavLink>
        </div>
        <div>
          <div className=''>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='m-auto w-32 rounded-lg shadow-sm' alt="user" />
          </div>
          <div className='flex flex-col gap-3'>
            <div className="max-w-md pl-4 pr-4">
              <TextInput id="username3" placeholder="HariKrishnasinh Zala" addon="@" required />
            </div>
            <div className='max-w-md pl-4 pr-4'>
              <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
            </div>
          </div>
          <div className='p-4'>
            <div className='h-52 w-[100%] m-auto bg-violet-200 p-2 pr-5 shadow-lg overflow-y-auto overflow-x-hidden break-words'>
              <h2>Heading of the blog</h2>
              <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile