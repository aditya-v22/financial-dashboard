import { cn } from '../../utils';

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'left' | 'right' | 'up' | 'down';
}

const styles = {
  left: 'rotate-90',
  right: '-rotate-90',
  up: 'rotate-180',
  down: 'rotate-0',
};

const Arrow: React.FC<ArrowProps> = ({ direction = 'down', className, ...props }) => {
  return (
    <svg
      width='14'
      height='9'
      viewBox='0 0 14 9'
      fill='none'
      className={cn('inline-block', styles[direction], className)}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 1L7 7L13 1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export { Arrow as ArrowIcon };
export type { ArrowProps as ArrowIconProps };
