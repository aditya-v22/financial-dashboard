import { DayPicker, DayPickerProps, getDefaultClassNames } from 'react-day-picker';
import { cn } from '../../../utils';

import 'react-day-picker/style.css';

const DATE_PICKER_NAME = 'DatePicker';

type DatePickerProps = DayPickerProps;

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { className, classNames, showOutsideDays, ...datePickerProps } = props;
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        today: 'bg-primary-100 rounded-small',
        selected: `bg-gray-950 rounded-small !text-light`,
        disabled: 'text-gray-200',
        outside: 'text-gray-300',
        root: `${defaultClassNames.root} w-fit rounded-large shadow-lg p-5`,
        chevron: `${defaultClassNames.chevron} !fill-gray-950`,
        months_dropdown: 'scrollbar min-w-[150px] !p-4',
        years_dropdown: 'scrollbar min-w-[100px] !p-4',

        ...classNames,
      }}
      {...datePickerProps}
    />
  );
};

DatePicker.displayName = DATE_PICKER_NAME;

export { DatePicker };
export type { DatePickerProps };
