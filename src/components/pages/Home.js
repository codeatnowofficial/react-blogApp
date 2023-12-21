import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard'
import Nav from '../Nav'
import axios from 'axios'
import SkeletonLoading from '../SkeletonLoading'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  let UsernameArray
  let username = localStorage.getItem("username")
  let login = localStorage.getItem("login")

  useEffect(() =>{
    if(login === false || !login){
      navigate("/login")
    }  
    checkUser()
    getPosts()
  })

  const checkUser = async () =>{
    // let url = "https://gold-crowded-hippo.cyclic.app/users/login/"
    UsernameArray = {
      username:username
    }
    JSON.stringify(UsernameArray)
    console.log(UsernameArray)
    await axios.post(process.env.REACT_APP_URL+'/users/login', UsernameArray).then((res) =>console.log(res)).catch((err) => console.log(err))
    // console.log(login_auth_check)
    
  }

  const getPosts = () =>{
    // let url = 'https://gold-crowded-hippo.cyclic.app/blogs'
    setLoading(true)
    axios.get(process.env.REACT_APP_URL+'/blogs')
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
            <BlogCard heading={array.title}key={key} description={array.description} user='user' />
            )
        })
      
      }
        
       </div>
    </div>
  )
}

export default Home