import { cn } from '../../utils';

type XIconProps = React.SVGProps<SVGSVGElement>;

const XIcon: React.FC<XIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('inline-block', className)}
      {...props}
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
};

export { XIcon };
export type { XIconProps };
