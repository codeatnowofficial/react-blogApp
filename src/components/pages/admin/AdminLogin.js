import React, { useState } from "react";
import { Card, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [password, setPassword] = useState(true);
  const [dataAdmin, setDataAdmin] = useState([]);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataAdmin((data) => ({ ...data, [name]: value }));
    // console.log(dataAdmin);
  };

  const getData = async () => {
    const login = await axios.post(
      process.env.REACT_APP_URL + "/admin/login-admin",
      dataAdmin
    );
    console.log(login);
    if (login.data.user) {
      localStorage.setItem("adminId", login.data.user._id);
      navigate("/admin");
    }
    setMessage(true);
  };
  const handlePassword = () => {
    setPassword((value) => (value = !value));
  };
  return (
    <div className="bg-red-50 h-[90vh]">
      <div className="flex flex-col items-center justify-around h-[67vh] bg-red-50">
        <div className="h-[5vh]"></div>
        <h2 className="text-3xl text-red-600 font-bold">Admin Login</h2>
        <Card className="w-5/6 sm:w-2/6">
          {message ? (
            <p className="bg-red-50 text-red-700 border py-2 px-4 border-red-800">
              Please enter correct credential
            </p>
          ) : (
            ""
          )}
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                name="adminUsername"
                onChange={handleChange}
                placeholder="username"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              {password ? (
                <TextInput
                  id="password1"
                  name="adminPassword"
                  type="password"
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextInput
                  id="password1"
                  name="adminPassword"
                  type="text"
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="underline" onClick={handlePassword}>
                Show password
              </span>
            </div>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
              onClick={getData}
            >
              Submit
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
