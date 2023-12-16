import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard'
import Nav from '../Nav'
import axios from 'axios'

const Home = () => {
  const [data,setData] = useState([])
  useEffect(() =>{
    getPosts()
  },[])
  const getPosts = () =>{
    let url = 'https://gold-crowded-hippo.cyclic.app/blogs'
    axios.get(url).then(res => setData(...data,res.data)).catch(err => console.log(err))
  }
  return (
    <div>
      <Nav></Nav>
      <div className='pt-24 pb-24 sm:pb-20 bg-violet-50'>
        <h1 className='text-3xl text-center font-bold text-violet-600'>Blogs</h1>
        {
          data?.map((array,key) =>{
            return (
              <BlogCard heading={array.title} description={array.description} user='user' />
              )
          })
        }
       </div>
    </div>
  )
}

export default Home