
'use client';

import { ListGroup } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav'

export default function UsersList() {
  return (
    <div>
      <Nav></Nav>
    <div className='mt-20 mb-10 h-[80vh] bg-violet-50 text-center text-2xl font-bold'>
    <h2 className='pb-4 pt-4'>Total User</h2>
      <div className="flex justify-center flex-wrap gap-3 p-2 mb-24">
        <ListGroup className="w-full text-lg">
          <NavLink to="/users-profile/hari">
            <ListGroup.Item>
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='img-fluid w-10' alt="user" />hello user 1
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
        <ListGroup className="w-full text-lg">
          <NavLink to="/users-profile/krishna">
            <ListGroup.Item>
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='img-fluid w-10' alt="user" />hello user 1
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
        <ListGroup className="w-full text-lg">
          <NavLink to="/users-profile/hari">
            <ListGroup.Item>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='img-fluid w-10' alt="user" />hello user 1
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
        <ListGroup className="w-full text-lg">
          <NavLink to="/users-profile/hari">
            <ListGroup.Item>
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png" className='img-fluid w-10' alt="user" />hello user 1
            </ListGroup.Item>
            </NavLink>
            </ListGroup>
            
            </div>
            </div>
            </div>
  );
}
