import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const BlogPage = () => {
const blog_params = useParams()
    return (
    <div className='h-screen'>
    <div className='mt-24 flex flex-col items-center justify-center'>
        <div className='bg-violet-100 mb-4 border border-violet-500 rounded-md shadow-md shadow-violet-100 w-screen p-2 flex items-center justify-center'>
        @
        <span className='text-violet-700 text-2xl font-bold italic'>
            {blog_params.blog_user}
        </span>
        </div>
        <div>
            <div>
                <h1 className='text-2xl text-center mb-4'>~ Blog ~</h1>
            </div>          
            <hr className='w-screen'/>
            <div>
                <div>
                    <h1 className='ml-5 mt-5 text-2xl'>{blog_params.blog_title}</h1>
                </div>
                <div>
                    <h1 className='ml-5 mt-5 text-lg'>{blog_params.blog_description}</h1>
                </div>
            </div>
        </div>
        <NavLink to='/' className='border mt-4 border-violet-400 px-4 py-2 rounded-md text-md hover:text-white hover:bg-violet-500 transition ease'>Back To Home</NavLink>
    </div>
    {
        /*
        {blog_params.blog_title}
        {console.log(blog_params)}
        */
    }
    </div>
  )
}

export default BlogPage