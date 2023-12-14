import axios from 'axios';
import { Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { NavLink, json } from 'react-router-dom';

export default function Login() {
  const [data, setdata] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((data) => ({ ...data, [name]: value }));
    // console.log(data)
  }

  // console.log(params)
  const getData = (e) => {
    e.preventDefault()
    // console.log(data)
    let url = "https://gold-crowded-hippo.cyclic.app/users/login"
    axios.post(url,data).then((res) => console.log(res)).catch((error) => console.log(error))
  }

  return (
    <div className='bg-violet-50 h-[90vh]'>

      <div className='flex flex-col items-center justify-around h-[67vh] bg-violet-50'>
        <div className='h-[5vh] bg-slate-400'>

        </div>
        <h2 className='text-3xl text-violet-600 font-bold'>Login</h2>
        <Card className="w-5/6 sm:w-2/6">
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
