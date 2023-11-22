import { Card } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function BlogCard(props) {
  return (
    <div className='bg-violet-50 pt-4 sm:pl-32 sm:pr-32 p-4'>
      <NavLink to={`/blog-page/${props.heading}/${props.description}/${props.user}`}>
        <div className='flex items-center gap-2 text-xl my-1 rounded-tl-sm'>
          <div>
          </div>
          <div>
            <h1 className='text-violet-700'>@user</h1>
          </div>
        </div>
        <Card className="container m-auto sm:min-w-full sm:p-0 hover:shadow-md shadow-none rounded-lg rounded-tl-none rounded-tr-none">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.description.slice(0, 10)}
          </p>
        </Card>
      </NavLink>
    </div>
  );
}
