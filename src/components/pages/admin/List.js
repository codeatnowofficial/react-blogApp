import axios from "axios";
import React, { useEffect, useState } from "react";

const List = (props) => {
  const { listData } = props;
  const [individualData, setIndividualData] = useState([])


  const getUsers = async () => {
    const users = await axios.get(process.env.REACT_APP_URL + '/users')
    const usersData = users.data
    setIndividualData((prev) => {
      return {
        usersData
      }
    })
  }
  const getAdmins = async () => {
    const admins = await axios.get(process.env.REACT_APP_URL + '/admin')
    const adminsData = admins.data
    setIndividualData((prev) => {
      return {
        adminsData
      }
    })
  }
  const getBlogs = async () => {
    const blogs = await axios.get(process.env.REACT_APP_URL + '/blogs')
    const blogsData = blogs.data
    setIndividualData((prev) => {
      return {
        blogsData
      }
    })
  }
  console.log(individualData)
  useEffect(() => {
    if (listData == "users") {
      getUsers()
    }
    if (listData == "admins") {
      getAdmins()
    }
    if (listData == "blogs") {
      getBlogs()
    }
  }, [listData])


  console.log(individualData?.blogsData)
  return <div>
    {/* testing table */}
    {/* testing table over */}
       {
      listData == "blogs" && <div> list data: blogs
        {
          individualData?.blogsData?.map((blog) => {
            return (
              <div>
                {blog._id}
              </div>
            )
          })
        }
      </div>
    }
    {
      listData == "users" && <div className="bg-slate-50"><div className="bg-slate-50">
        <div class="flex flex-wrap -mx-3 mb-5 bg-slate-50">
          <div class="w-full max-w-full px-3 mb-6 mx-auto">
            <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div class="px-9 pt-5 bg-slate-50 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                  <h3 class="flex flex-col items-start bg-slate-50 justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                    <span class="mr-3 font-semibold text-dark text-xl">User's Details</span>
                    <span class="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
                  </h3>
                </div>
                <div class="flex-auto block py-8 pt-6 px-9 bg-slate-50">
                  <div class="overflow-x-auto">
                    <table class="w-full my-0 align-middle bg-slate-50 text-dark border-neutral-200">
                      <thead class="align-bottom">
                        <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                          <th class="pb-3 text-start min-w-[175px]">USERNAME</th>
                          <th class="pb-3 text-end min-w-[100px]">EMAIL</th>
                          <th class="pb-3 text-end min-w-[100px]">PASSWORD</th>
                          <th class="pb-3 pr-12 text-end min-w-[175px]">DELETE</th>
                          <th class="pb-3 pr-12 text-end min-w-[100px]">UPDATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          individualData?.usersData?.map((user) => {
                            return <tr class="border-b border-dashed last:border-b-0">
                              <td class="p-3 pl-0">
                                <div class="flex items-center">
                                  <div class="flex flex-col justify-start">
                                    <a href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {user.username} </a>
                                  </div>
                                </div>
                              </td>
                              <td class="p-3 pr-0 text-end">
                                <span class="font-semibold text-light-inverse text-md/normal">{user.email}</span>
                              </td>
                              <td class="p-3 pr-7 text-end">
                                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  {user.password} </span>
                              </td>
                              <td class="p-3 pr-7 text-end">
                                <span class="text-center align-baseline inline-flex px-4 py-3 items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">

                                  <button className="bg-red-200 flex items-center justify-center gap-1 ring-2 ring-red-500 text-red-800 font-bold px-7 py-2 outline-none tracking-wide"><span class="material-symbols-outlined">
                                    delete
                                  </span><span>
                                      Delete
                                    </span>
                                  </button>
                                </span>
                              </td>
                              <td class="p-3 text-end">
                                <span class="font-semibold text-light-inverse text-md/normal">
                                  <button className="bg-emerald-200 flex items-center justify-center gap-1 ring-2 ring-emerald-500 text-emerald-800 font-bold px-7 py-2 outline-none tracking-wide">
                                    <span class="material-symbols-outlined">
                                      update
                                    </span>
                                    <span>
                                    Update
                                    </span>
                                  </button>
                                </span>
                              </td>

                            </tr>
                          })
                        } </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-5">
          <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
            <p class="text-sm text-slate-500 py-1"> Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard</a> by <a href="https://www.loopple.com" class="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>. </p>
          </div>
        </div>

      </div>
      </div>
    }
    {
      listData == "admins" && <div> list data: admins
        {
          individualData?.adminsData?.map((admin) => {
            return (
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
