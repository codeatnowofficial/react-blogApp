import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink} from 'react-router-dom';

export default function Component() {
  let username = localStorage.getItem("username")
  return (
    <div className='relative overflow-hidden'>

      <Navbar fluid rounded className='fixed z-50 p-5 sm:p-3 top-0 left-0 right-0 rounded-md shadow-lg shadow-violet-100'>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap font-semibold text-2xl"><span className='text-violet-700'>Blog</span>App</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{username}</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <NavLink to='/user-profile/user'>
              <Dropdown.Item>Profile</Dropdown.Item>
            </NavLink>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='p-2'>
          <NavLink to='/' className="text-lg hover:text-violet-500 p-2 hover:bg-violet-100 rounded-md sm:hover:bg-white">Home</NavLink>
           <NavLink to='/about' className="text-lg hover:text-violet-500 p-2 hover:bg-violet-100 rounded-md sm:hover:bg-white">About</NavLink>
          <NavLink to='/users' className="text-lg hover:text-violet-500 p-2 hover:bg-violet-100 rounded-md sm:hover:bg-white">Users</NavLink>
          <NavLink to='/contact' className="text-lg hover:text-violet-500 p-2 hover:bg-violet-100 rounded-md sm:hover:bg-white">Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
