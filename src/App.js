import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import Contact from './components/pages/Contact';
import Foot from './components/pages/Foot';
import BlogPage from './components/pages/BlogPage';
import UserProfile from './components/pages/UserProfile';
function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route element={<Home/>} index/>
    <Route element={<Home/>} path='/'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Users/>} path='/users'/>
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<UserProfile/>} path='/users-profile'/>
    <Route element={<BlogPage/>} path='/blog-page/:blog_title/:blog_description/:blog_user'/>
    </Routes>
    <Foot/>
    </BrowserRouter>
  );
}

export default App;
