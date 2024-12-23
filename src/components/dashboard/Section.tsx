import React from 'react';
import { Button, ButtonProps } from '../ui/button';

const SECTION_NAME = 'DashboardSectionContainer';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  headerProps?: {
    buttonText?: string;
    showButton?: boolean;
    ButtonProps?: ButtonProps;
  };
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, title, headerProps = {} } = props;

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <label className='text-[22px] text-primary-900 font-semibold'>{title} </label>

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
