import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard'
import Nav from '../Nav'
import axios from 'axios'
import SkeletonLoading from '../SkeletonLoading'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
  const [user,setUser] = useState()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  let login_auth_check,UsernameArray
  let username = localStorage.getItem("username")

  useEffect(() =>{
    checkUser()
    getPosts()
  },[username])

  const checkUser = async () =>{
    let url = "https://gold-crowded-hippo.cyclic.app/users/login/"
    UsernameArray = {
      username:username
    }
    JSON.stringify(UsernameArray)
    console.log(UsernameArray)
    await axios.post(url, UsernameArray).then((res) => login_auth_check = res.data).catch((err) => console.log(err))
    console.log(login_auth_check)
    if(!login_auth_check){
      navigate("/login")
    }   
  }

  const getPosts = () =>{
    let url = 'https://gold-crowded-hippo.cyclic.app/blogs'
    setLoading(true)
    axios.get(url)
    .then(res =>{
      setData(...data,res.data)
      setLoading(false)
    }) 
    .catch(err => console.log(err))
  }
  return (
    <div>
      <Nav></Nav>
      <div className='pt-24 pb-24 sm:pb-20 bg-violet-50'>
        <h1 className='text-3xl text-center font-bold text-violet-600'>Blogs</h1>
        
      {loading ? <SkeletonLoading/> :
      
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