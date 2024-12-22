import React from 'react';
import { Label, LabelProps } from '../ui/label';
import { Input, InputProps } from '../ui/input';
import { ErrorMessage, useField } from 'formik';

const INPUT_FIELD_NAME = 'InputField';

interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  LabelProps?: LabelProps;
  InputProps?: InputProps;
  showErrorMessage?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, placeholder, type, name, showErrorMessage = true, InputProps = {}, LabelProps = {} } = props;
  const [field, meta] = useField({ name });

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
      <Input
        id={name}
        aria-labelledby={name}
        placeholder={placeholder}
        type={type}
        error={Boolean(meta.touched && meta.error)}
        {...InputProps}
        {...field}
      />

      {showErrorMessage && (
        <div className='h-3 text-xs text-error-500'>{meta.touched && meta.error && <ErrorMessage name={name} />}</div>
      )}
    </div>
  );
};

InputField.displayName = INPUT_FIELD_NAME;

export { InputField };
export type { InputFieldProps };
