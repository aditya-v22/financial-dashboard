import React from 'react';
import { ErrorMessage, useField } from 'formik';
import dayjs from 'dayjs';
import { Label, LabelProps } from '../ui/label';
import { inputVariants } from '../ui/input';
import { DatePicker, DatePickerProps } from '../ui/date-picker';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '../../utils';
import { Button } from '../ui/button';
import { ArrowIcon } from '../icons';

const DATE_PICKER_FIELD_NAME = 'DatePickerField';

interface DatePickerFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  LabelProps?: LabelProps;
  PickerProps?: DatePickerProps;
  showErrorMessage?: boolean;
}

const DatePickerField: React.FC<DatePickerFieldProps> = (props) => {
  const { label, placeholder, name, showErrorMessage = true, PickerProps = {}, LabelProps = {} } = props;
  const [field, meta, helper] = useField({ name });

  return (
    <div className='flex flex-col gap-1.5'>
      {label && (
        <Label
          htmlFor={name}
          className='mb-1'
          {...LabelProps}
        >
          {label}
        </Label>
      )}

      <Popover>
        <PopoverTrigger
          asChild
          className={cn(inputVariants({ inputSize: 'default', variant: 'default' }), 'justify-between', {
            'text-primary-100/40': !field.value,
          })}
          error={!!(meta.touched && meta.error)}
        >
          <Button
            type='button'
            size='lg'
          >
            {field.value ? dayjs(field.value).format('DD MMMM YYYY') : placeholder}
            <ArrowIcon
              direction='down'
              className='text-primary-!00'
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          asChild
          className='p-0 border rounded-large !w-fit bg-light'
        >
          <div>
            <DatePicker
              id={name}
              aria-labelledby={name}
              {...PickerProps}
              mode='single'
              selected={field.value}
              onSelect={(selected: Date | undefined) => {
                helper.setValue(selected);
                helper.setTouched(true);
              }}
            />
          </div>
        </PopoverContent>
      </Popover>

      {showErrorMessage && (
        <div className='h-3 text-xs text-error-500'>{meta.touched && meta.error && <ErrorMessage name={name} />}</div>
      )}
    </div>
  );
};

DatePickerField.displayName = DATE_PICKER_FIELD_NAME;

export { DatePickerField };
export type { DatePickerFieldProps };
