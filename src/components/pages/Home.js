import React from 'react'
import BlogCard from '../BlogCard'
import Nav from '../Nav'

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className='pt-24 pb-24 sm:pb-20 bg-violet-50'>
        <h1 className='text-3xl text-center font-bold text-violet-600'>Blogs</h1>
        <BlogCard image='https://tse4.mm.bing.net/th?id=OIP.3zgwSSaJ2bHLkfggkM2dGgHaHa&pid=Api&P=0&h=220' heading='this is the heading ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://www.flowbite-react.com/images/blog/image-4.jpg' heading='this is the heading ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://tse4.mm.bing.net/th?id=OIP.3zgwSSaJ2bHLkfggkM2dGgHaHa&pid=Api&P=0&h=220' heading='this is the heading ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://www.flowbite-react.com/images/blog/image-4.jpg' heading='this is the heading2 ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://tse4.mm.bing.net/th?id=OIP.3zgwSSaJ2bHLkfggkM2dGgHaHa&pid=Api&P=0&h=220' heading='this is the heading ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://www.flowbite-react.com/images/blog/image-4.jpg' heading='this is the heading3 ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
        <BlogCard image='https://www.flowbite-react.com/images/blog/image-4.jpg' heading='this is the heading4 ' description='this is the small export defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport defaultexport default description' user='user' />
      </div>
    </div>
  )
}

export default Home