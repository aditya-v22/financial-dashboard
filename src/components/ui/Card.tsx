import React, { Suspense } from 'react';
import { cn } from '../../utils';
import Loader from './PageLoader';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-labelledby': React.HTMLAttributes<HTMLDivElement>['aria-labelledby'];
}

const Card: React.FC<CardProps> = ({ children, className = '', role = 'region', ...props }) => {
  return (
    <div
      className={cn('p-[30px] bg-light rounded-large w-full h-full', className)}
      role={role}
      {...props}
    >
      {/* Card title for accessibility */}
      <h2
        id={props['aria-labelledby']}
        className='sr-only'
      >
        Card Content
      </h2>

      <Suspense fallback={<Loader />}>
        <div>{children}</div>
      </Suspense>
    </div>
  );
};

export default Card;
