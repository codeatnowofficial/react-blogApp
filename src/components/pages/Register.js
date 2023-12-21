import React, { useState } from 'react'
import { Card, Label, TextInput } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((data) => ({ ...data, [name]: value }));
    // console.log(data)
  }

  // console.log(params)
  const getData = async (e) => {
    e.preventDefault()
    // let url = "https://fair-fly-skirt.cyclic.app/users/"
    await axios.post(process.env.REACT_APP_URL + '/users',data).then((res) => navigate('/login')).catch((err) => console.log(err))

    // console.log(login_auth_check)
    // if(!login_auth_check) setMessage(true) 
    // await fetch(url).then((res) => console.log(res)).catch((err) => console.log(error))
    // await fetch(url, {method:'post',body:JSON.stringify(data)}).then((res) => console.log(res)).catch((error) => console.log(error))
  }
  return (

    <div className='bg-violet-50 h-[90vh]'>

      <div className='flex flex-col items-center justify-around h-[75vh] bg-violet-50'>
        <div className='h-[5vh] bg-slate-400'>

        </div>
        <h2 className='text-3xl text-violet-600 font-bold'>Register</h2>
        <Card className="w-5/6 sm:w-2/6">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your Username" />
              </div>
              <TextInput id="username" type="username" name='username' onChange={handleChange} placeholder="Harikrishna" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput id="email1" type="email" name='email' onChange={handleChange} placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" name='password' onChange={handleChange} required />
            </div>
            <div className="">
              already have an account&nbsp;
              <NavLink to='/login' className='underline'>
                Login
              </NavLink>
            </div>
            <button type="submit" className='bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-md' onClick={getData}>Submit</button>
          </form>
        </Card>
      </div>
    </div>
  );
}
