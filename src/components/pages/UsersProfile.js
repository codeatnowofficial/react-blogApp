import { TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { HiMail } from 'react-icons/hi';
import { NavLink, useParams } from 'react-router-dom'
import Nav from '../Nav'
import axios from 'axios';

const UsersProfile = () => {
  const params = useParams();
  const [data,setData] = useState([])
  let id
  useEffect(()=>{
    getUsers()
  },[params])
  const getUsers = () =>{
    let url =`https://gold-crowded-hippo.cyclic.app/users/${params.username}`
    axios.get(url).then(res => setData(...data,res.data)).catch(err =>console.log(err))
  console.log(url)
  }
  console.log(data._id)
  return (
    <div>
      <Nav></Nav>
    <div className='h-80vh overflow-hidden bg-violet-50'>
      <div className='bg-violet-50 mt-20 mb-10'>
        <div className='pt-6 px-4 h-auto flex items-center justify-between'>
          <div>
            <NavLink to='/users' className='px-4 py-2 border-none '><span class="material-symbols-outlined text-violet-500 text-2xl sm:text-3xl">
              arrow_back_ios
            </span>
            </NavLink>
          </div>
          <div>
          </div>
        </div>
        <div>
          <div className='sm:flex sm:items-center sm:justify-content sm:w-screen'>
            <div className=''>
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='m-auto w-32 rounded-lg shadow-sm sm:w-44' alt="user" />
            </div>
            <div className='flex flex-col gap-3 sm:w-auto'>
              <div className="max-w-md pl-4 pr-4 text-[100px]">
                <TextInput id="username3" className='text-[100px] sm:w-[86vw]' style={{ "font-size": "1.rem", "outline":"none" }} disabled value={data.username} addon="@" required />
              </div>
              <div className='max-w-md pl-4 pr-4'>
                <TextInput id="email4" type="email" className='sm:w-[86vw]' icon={HiMail} style={{ "font-size": "1.rem" }} disabled value={data.email} required />
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='h-52 sm:h-[40vh] w-[100%] m-auto example bg-violet-500 rounded-md text-white p-2 pr-2 shadow-lg overflow-y-auto overflow-x-hidden break-words'>
              <h2 className='text-xl pb-2 text-white text-center sm:text-left'>Blogs</h2>
              <hr />
              <div className='py-2'>

                <div className='pb-4'>
                  <div>
                    <h2 className='text-lg font-bold'>Heading of the blog</h2>
                  </div>
                  <div>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                  </div>
                </div>
                <div className='pb-4'>
                  <div>
                    <h2>Heading of the blog</h2>
                  </div>
                  <div>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                  </div>
                </div>
                <div className='pb-4'>
                  <div>
                    <h2>Heading of the blog</h2>
                  </div>
                  <div>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                  </div>
                </div>
                <div className='pb-4'>
                  <div>
                    <h2>Heading of the blog</h2>
                  </div>
                  <div>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default UsersProfile