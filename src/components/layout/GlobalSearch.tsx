import { cn } from '../../utils';
import { SearchIcon } from '../icons';

const GLOBAL_SEARCH_NAME = 'GlobalSearch';

interface GlobalSearchProps {
  className?: HTMLElement['className'];
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ className }) => {
  return (
    <div
      aria-label='global search box'
      className={cn(
        'flex items-center h-[40px] md:h-[50px] w-full max-w-[255px] rounded-[40px] bg-gray-50 pl-6 gap-2.5',
        className
      )}
    >
      <SearchIcon className='text-primary-100 h-4 w-4 md:h-4 md:w-4' />
      <input
        type='text'
        placeholder='Search for something'
        className='bg-transparent outline-none border-none placeholder:text-primary-50 text-[13px] md:text-[15px] pl-2 pr-6 w-full h-full caret-primary-900 text-primary-900'
      />
    </div>
  );
};

GlobalSearch.displayName = GLOBAL_SEARCH_NAME;

export { GlobalSearch };
