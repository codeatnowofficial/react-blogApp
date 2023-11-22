
'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function Login() {
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
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center justify-between gap-2">
          <a href="#" className='underline'>
            Forgot password
          </a>  
          <NavLink to='/register' className='underline'>
            Register
          </NavLink>  
          </div>
          <button type="submit" className='bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-md'>Submit</button>
        </form>
      </Card>
    </div>
    </div>
  );
}
