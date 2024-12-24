import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full min-h-screen justify-center items-center'>
      <h1 className='text-xl font-bold'>404 - Page Not Found</h1>

      <Link to='/'>
        <Button size='lg'>Go back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
