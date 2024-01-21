import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import Contact from './components/pages/Contact';
import Foot from './components/Foot';
import BlogPage from './components/pages/BlogPage';
import UsersProfile from './components/pages/UsersProfile';
import UserProfile from './components/pages/UserProfile';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AddBlogPage from './components/pages/AddBlogPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} index/>
    <Route element={<Home/>} path='/'/>
    <Route element={<AddBlogPage/>} path='/addblog'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Users/>} path='/users'/>
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<Login/>} path='/login'/>
    <Route element={<Register/>} path='/register'/>
    <Route element={<UsersProfile/>} path='/users-profile/:username'/>
    <Route element={<UserProfile/>} path='/user-profile/:username'/>
    <Route element={<BlogPage/>} path='/blog-page/:blog_title/:blog_description/:blog_user'/>
    </Routes>
    <Foot/>
    </BrowserRouter>
  );
}

export default App;
