import { Card, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    username: "",
    password: ""
  })
  const [message, setMessage] = useState(false)

  let login_auth_check

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((data) => ({ ...data, [name]: value }));
    // console.log(data)
  }
  login_auth_check = 1
  // console.log(params)
  const getData = async (e) => {
    e.preventDefault()
    console.log(data)
    // let url = "https://fair-fly-skirt.cyclic.app/users/login"
    await axios.post(process.env.REACT_APP_URL +'/users/login', data).then((res) => login_auth_check = res.data).catch((err) => console.log(err))
    console.log(login_auth_check)
    if (!login_auth_check) setMessage(true)
    else {
      localStorage.setItem("login", "true")
      localStorage.setItem("username", `${data.username}`)
      navigate("/")
    }
    // await fetch(url).then((res) => console.log(res)).catch((err) => console.log(error))
    // await fetch(url, {method:'post',body:JSON.stringify(data)}).then((res) => console.log(res)).catch((error) => console.log(error))
  }

  return (
    <div className='bg-violet-50 h-[90vh]'>

      <div className='flex flex-col items-center justify-around h-[67vh] bg-violet-50'>
        <div className='h-[5vh]'>

        </div>
        <h2 className='text-3xl text-violet-600 font-bold'>Login</h2>
        <Card className="w-5/6 sm:w-2/6">
          {
            message ? <p className='bg-red-50 text-red-700 border py-2 px-4 border-red-800'>
              Please enter correct credential
            </p> : ''
          }
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your Username" />
              </div>
              <TextInput id="username" type="text" name='username' onChange={handleChange} placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" name="password" type="password" onChange={handleChange} required />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className='underline'>
                Forgot password
              </span>
              <NavLink to='/register' className='underline'>
                Register
              </NavLink>
            </div>
            <button type="button" className='bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-md' onClick={getData}>Submit</button>
          </form>
        </Card>
      </div>
    </div>
  );
}
