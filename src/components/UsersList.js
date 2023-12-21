
'use client';

import { ListGroup } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav'
import { useEffect, useState } from 'react';
import axios from 'axios'
import SkeletonLoading from './SkeletonLoading';
// import env from './env'

// require('dotenv').config()
export default function UsersList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = () => {
    setLoading(true)
    // let url = 'https://fair-fly-skirt.cyclic.app/users/'
    console.log(process.env.REACT_APP_URL)
    axios.get(process.env.REACT_APP_URL+ '/users')
    .then((res) => {
      setData(...data, res.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <Nav></Nav>
      <div className='mt-20 mb-10 h-[80vh] bg-violet-50 text-center text-2xl font-bold'>
        <h2 className='pb-4 pt-4'>Total User</h2>
        {
          loading ? <SkeletonLoading Users="usersLoading"/>:
          <div className="flex justify-center flex-wrap gap-3 p-2 mb-24">
          {
            data?.map((array, index) => {
              return (
                <ListGroup className="w-full text-lg">
                  <NavLink to={`/users-profile/${array.username}`}>
                    <ListGroup.Item>
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='img-fluid w-10' alt="user" />{array.username}
                    </ListGroup.Item>
                  </NavLink>
                </ListGroup>
              )
            })
          }
        </div>
        }
       
      </div>
    </div>
  );
}
