import React from 'react';
import { Button, ButtonProps } from '../ui/button';
import { cn } from '../../utils';

const SECTION_NAME = 'DashboardSectionContainer';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  headerProps?: {
    buttonText?: string;
    showButton?: boolean;
    ButtonProps?: Omit<ButtonProps, 'children'>;
  };
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, title, className, headerProps = {} } = props;

  return (
    <div className={cn('flex flex-col gap-4 lg:gap-5', className)}>
      <div className='flex items-center justify-between'>
        <label className='text-base md:text-lg lg:text-[22px] text-primary-900 font-semibold'>{title} </label>

        {headerProps.showButton && (
          <Button
            variant={'ghost'}
            {...headerProps.ButtonProps}
          >
            {headerProps.buttonText}
          </Button>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
};

Section.displayName = SECTION_NAME;

export { Section };
export type { SectionProps };
