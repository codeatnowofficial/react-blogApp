import React, { useState } from 'react'
import Nav from '../Nav'
import axios from 'axios'
const AddBlogPage = () => {
    let uid = localStorage.getItem("username")
    const [data,setData]=useState({
        uid:uid,
        title:'',
        description:''
    })
    const [message, setMessage] = useState(0)

    const changeHandler = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }
    const submitHandler = async (e) =>{
        e.preventDefault()
        // const check = JSON.parse(data)
        const create = await axios.post(`${process.env.REACT_APP_URL}/blogs`,data)
        console.log("data",create)
        if(create.data.status == 'Success'){
            setMessage(1)
        }
    }
    return (
        <div>
            <Nav></Nav>
            <div className='mt-20 mb-10 h-[80vh] flex items-start justify-center bg-violet-50 text-center text-2xl font-bold'>
                <div class="max-w-md w-full bg-violet-50 p-8 rounded-md">
                <h2 class="text-2xl font-semibold mb-6">Add Blog</h2>
                {
                    message ? <h1 className='text-sm text-green-600 font-normal'>
                    Blog Added Succesfully !!!
                    </h1> :'' 
                }
                    <form>
                        <div class="mb-4">
                            <label for="title" class="float-left text-md font-medium text-gray-600">Title</label>
                            <input onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter the title" class="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div class="mb-4">
                            <label for="description" class="float-left text-md font-medium text-gray-600">Description</label>
                            <textarea id="description" onChange={changeHandler} name="description" placeholder="Enter the description" class="mt-1 p-2 w-full border rounded-md resize-none"></textarea>
                        </div>

                        <div class="flex items-center justify-end">
                            <button onClick={submitHandler} type="submit" class="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlogPage