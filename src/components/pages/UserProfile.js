import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from "react-icons/ri";
import Nav from '../Nav'
import { NavLink, useParams } from 'react-router-dom'

const UserProfile = () => {
    const params = useParams();
    const [data, setdata] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{
            const { name, value } = e.target;
            setdata((data) => ({ ...data, [name]: value }));
            console.log(data)
    }

    // console.log(params)
    const getData = (e) =>{
        console.log(data)
    }
    return (
        <div>
        <Nav></Nav>

        <div className='h-[90vh] overflow-hidden bg-violet-50'>
        <div className='bg-violet-50 mt-20 mb-10'>
                <div className='pt-6 px-4 h-auto flex items-center justify-between'>
                    <div>
                        <NavLink to='/users' className='px-4 py-2 border-none '><span className="material-symbols-outlined text-violet-500 text-2xl sm:text-3xl">
                            arrow_back_ios
                        </span>
                        </NavLink>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='h-[64vh] flex items-center justify-center sm:items-start sm:justify-start'>
                <div className='pt-4 w-full flex flex-col justify-center items-center h-full'>
                <h2 className='text-3xl font-bold text-violet-600 sm:pt-10 pt-5'>
                Update User   
                </h2>
                        <div className='flex flex-col items-center justify-center h-full gap-3 w-full sm:w-[40vw] m-auto'>
                            <div className="w-full pl-4 pr-4 text-[100px]">
                                <TextInput id="username3" className='text-[100px] sm:w-full w-full' disabled style={{ "fontSize": "1.rem", "outline": "none" }} onChange={handleChange} name='username' value={params.username} addon="@" required />
                                </div>
                            <div className='w-full pl-4 pr-4'>
                            <TextInput id="email4" type="email" className='sm:w-full w-full' icon={HiMail} style={{ "fontSize": "1.rem" }} value={data.email} onChange={handleChange} name='email' required />
                            </div>
                            <div className='w-full pl-4 pr-4'>
                            <TextInput id="password" type="text" className='sm:w-full w-full flex' icon={RiLockPasswordFill} style={{ "fontSize": "1.rem" }} value={data.password} onChange={handleChange} name='password' required />
                            </div>
                            <div className='p-4'>
                            <button className='text-white bg-violet-500 font-bold px-4 py-2 w-auto rounded-md sm:text-lg' onClick={getData}>Update Profile</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserProfile