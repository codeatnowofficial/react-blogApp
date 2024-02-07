import axios from "axios";
import React, { useEffect, useState } from "react";

const List = (props) => {
  const { listData } = props;
  const [individualData,setIndividualData] = useState([])
 
 
  const getUsers = async () =>{
    const users = await axios.get(process.env.REACT_APP_URL+'/users')
    const usersData = users.data
    setIndividualData((prev) =>{
      return {
        usersData
      }
    })
  }
  const getAdmins = async () =>{
    const admins = await axios.get(process.env.REACT_APP_URL + '/admin')
    const adminsData = admins.data
    setIndividualData((prev) =>{
      return {
        adminsData
      }
    })
  }
  const getBlogs = async () =>{
    const blogs = await axios.get(process.env.REACT_APP_URL + '/blogs')
    const blogsData = blogs.data
    setIndividualData((prev) =>{
      return {
        blogsData
      }
    })
  }
  console.log(individualData)
  useEffect(() =>{
    if(listData == "users"){
      getUsers()
    }
    if(listData == "admins"){
      getAdmins()
    }
    if(listData == "blogs"){
      getBlogs()
    }
  },[listData])

  
    console.log(individualData?.blogsData)
  return <div>
    {
      listData == "none" && <div>
        <div>{individualData}</div>
      </div>
    }
    {
      listData == "blogs" && <div> list data: blogs  
        {
          individualData?.blogsData?.map((blog) => {
            return(
              <div>
                {blog._id}
              </div>
            )
          })
        }
      </div>
    }
    {
      listData == "users" && <div> list data: users  
      {
        individualData?.usersData?.map((user) => {
          return(
            <div>
              {user._id}
            </div>
          )
        })
      }
    </div>
    }
    {
      listData == "admins" && <div> list data: admins  
      {
        individualData?.adminsData?.map((admin) => {
          return(
            <div>
              {admin._id}
            </div>
          )
        })
      }
    </div>
    }
  </div>
  
};

export default List;
