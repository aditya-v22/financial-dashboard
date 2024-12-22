import { cn } from '../../utils';

type ChipProps = React.SVGProps<SVGSVGElement> & {
  darkImage?: boolean;
};

const Chip: React.FC<ChipProps> = ({ darkImage, className, ...props }) => {
  const imageUrl = darkImage
    ? 'data:image/png;base64,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'
    : 'data:image/png;base64,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';
  const patternId = darkImage ? 'pattern0' : 'pattern1';
  const imageId = darkImage ? 'image0' : 'image1';

  return (
    <svg
      width='35'
      height='35'
      viewBox='0 0 35 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={cn('inline-block', className)}
      {...props}
    >
      <rect
        width='34.7713'
        height='34.7713'
        fill={`url(#${patternId})`}
      />
      <defs>
        <pattern
          id={`${patternId}`}
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref={`#${imageId}`}
            transform='scale(0.01)'
          />
        </pattern>
        <image
          id={imageId}
          width='100'
          height='100'
          xlinkHref={imageUrl}
        />
      </defs>
    </svg>
  );
};

export { Chip as ChipIcon };
export type { ChipProps as ChipIconProps };
