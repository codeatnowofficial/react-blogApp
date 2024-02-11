// adding list to of different butonns
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoading from "../../SkeletonLoading";
import "material-icons/iconfont/material-icons.css";
import axios from "axios";
import List from "./List";

const AdminHome = () => {
  const navigate = useNavigate();
  const [detailsStartup, setDetailsStartup] = useState({});
  const [listCheck, setListCheck] = useState({
    blogs: false,
    users: false,
    admins: false,
  });

  useEffect(() => {
    cu();
  }, []);

  const cu = async () => {
    const ck = await check();
    if (!ck) navigate("/admin/login");
    const details = await getRequiredDetails();
  };

  const check = () => {
    const adminId = localStorage.getItem("adminId");
    if (!adminId) navigate("/admin/login");
    return true;
  };

  const getRequiredDetails = async () => {
    const usersCount = await getUsers();
    const blogsCount = await getBlogs();
    const adminCount = await getAdmin();
    setDetailsStartup((prev) => {
      return {
        ...prev,
        usersCount: usersCount,
        blogsCount: blogsCount,
        adminCount: adminCount,
      };
    });
  };

  const getUsers = async () => {
    const users = await axios.get(process.env.REACT_APP_URL + "/users");
    return users.data.length;
  };

  const getBlogs = async () => {
    const blogs = await axios.get(process.env.REACT_APP_URL + "/blogs");
    return blogs.data.length;
  };

  const getAdmin = async () => {
    const admins = await axios.get(process.env.REACT_APP_URL + "/admin");
    return admins.data.length;
  };

  const handleClickBtn = (listDataBtn) => {
    setListCheck((prev) => {
      return {
        [listDataBtn]: true,
      };
    });
  };

  return (
    <div className="pt-4 overflow-hidden bg-slate-50 removeScroll">
      <div className="flex items-center overflow-hidden justify-center gap-4">
        <button
          type="button"
          className="border-b-2 border-red-300 p-2 text-red-600 font-semibold transition-all ease rounded-sm hover:border-b-0 focus:ring-1 focus:ring-red-400"
        >
          Add Admin
        </button>
        <button
          type="button"
          className="border-b-2 border-blue-300 p-2 text-blue-600 font-semibold transition-all ease rounded-sm hover:border-b-0 focus:ring-1 focus:ring-red-400"
        >
          Remove Admin
        </button>
        <button
          type="button"
          className="border-b-2 border-green-300 p-2 text-green-600 font-semibold transition-all ease rounded-sm hover:border-b-0 focus:ring-1 focus:ring-red-400"
        >
          Update Admin
        </button>
      </div>
      <div className="flex pt-4 items-center justify-center gap-4 removeScroll">
        <button
          type="button"
          onClick={() => {
            handleClickBtn("users");
          }}
          className="bg-orange-200 py-2 px-8 hover:ring-1 hover:ring-orange-600 transition-all ease-linear rounded-md flex-col items-center justify-center gap-4"
        >
          <p className="flex items-center justify-center gap-4">
            <span className="material-symbols-outlined text-orange-500 text-3xl">
              group
            </span>
            <span className="font-bold text-orange-500">Users</span>
          </p>
          <p className="text-lg font-bold text-orange-500">
            {detailsStartup.usersCount}
          </p>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClickBtn("admins");
          }}
          className="bg-indigo-200 py-2 px-8 hover:ring-1 hover:ring-indigo-600 transition-all ease-linear rounded-md flex-col items-center justify-center gap-4"
        >
          <p className="flex items-center justify-center gap-4">
            <span className="material-symbols-outlined text-3xl text-indigo-500">
              shield_person
            </span>
            <span className="font-bold text-indigo-500">Admins</span>
          </p>
          <p className="text-lg font-bold text-indigo-500">
            {detailsStartup.adminCount}
          </p>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClickBtn("blogs");
          }}
          className="bg-green-200 py-2 px-8 hover:ring-1 hover:ring-green-600 transition-all ease-linear rounded-md flex-col items-center justify-center gap-4"
        >
          <p className="flex items-center justify-center gap-4">
            <span className="material-symbols-outlined text-green-500 text-3xl">
              rss_feed
            </span>
            <span className="font-bold text-green-500">Blogs</span>
          </p>
          <p className="text-lg font-bold text-green-500">
            {detailsStartup.blogsCount}
          </p>
        </button>
      </div>
      <div className="container overflow-y-scroll removeScroll bg-slate-50 h-[550px] p-4 my-2">
        {listCheck?.blogs && <List listData="blogs" />}
        {listCheck?.admins && <List listData="admins" />}
        {listCheck?.users && <List listData="users" />}
        {!listCheck?.blogs && !listCheck?.admins && !listCheck?.users && (
          <List listData="none" />
        )}
      </div>
    </div>
  );
};

export default AdminHome;
