import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Nav from '../Nav'
const BlogPage = () => {
    const blog_params = useParams()
    return (
        <div>
            <Nav></Nav>
        <div className='h-screen overflow-x-hidden bg-violet-50'>
            <div className='mt-20 flex items-center justify-between'>
                <div>
                    
                </div>
                <div className='flex items-center justify-start rounded-md w-full'>
                <NavLink to='/' className='px-4 py-6 border-none'><span className="material-symbols-outlined text-violet-500 text-2xl sm:text-3xl">
                        arrow_back_ios
                    </span>
                    </NavLink>
                    @
                <span className='text-violet-700 text-2xl font-bold italic'>
                        {blog_params.blog_user}
                    </span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>


                <div className='px-4 w-full'>
                    <hr className='w-screen' />
                    <div className='p-2 shadow-md min-h-[58vh] bg-white'>
                        <div>
                            <h1 className='ml-5 mt-1 mb-1 text-2xl'>{blog_params.blog_title}</h1>
                        </div>
                        <hr/>
                        <div>
                            <h1 className='ml-5 mt-5 text-lg'>{blog_params.blog_description}</h1>
                        </div>
                    </div>
                </div>
            </div>
            {
                /*
                {blog_params.blog_title}
                {console.log(blog_params)}
                */
            }
        </div>
        </div>

    )
}

export default BlogPage