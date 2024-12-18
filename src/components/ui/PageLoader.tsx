import React from 'react';

const Loader: React.FC = () => {
  return <div className='animate-spin rounded-3xl h-10 w-10 border-4 border-t-gray-300 border-primary-900'></div>;
};

export const PageLoader: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-[calc(var(--app-root-winh)_-_149px)] max-md:min-h-[calc(var(--app-root-winh)_-_170px)]'>
      <Loader />
    </div>
  );
};

export default Loader;
