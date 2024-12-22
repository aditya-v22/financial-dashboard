import { useState, useTransition } from 'react';
import { Form, Formik } from 'formik';
import { editProfileFormValidationSchema } from './validation';
import { EditProfileForm } from './EditProfileForm';
import { editProfileFormInitialValues } from './formFields';
import { EditProfileInput } from './types';

const EDIT_PROFILE_NAME = 'EditProfile';

const EditProfile = () => {
  const [isLoading, startTransition] = useTransition();
  const [apiError, setApiError] = useState<string | undefined>();

  const submitForm = (values: EditProfileInput) => {
    startTransition(() => {
      console.log('submitForm', values);
      // setApiError()
    });
  };

  return (
    <div className='pt-8 pl-8 w-full'>
      <Formik<EditProfileInput>
        initialValues={editProfileFormInitialValues}
        validationSchema={editProfileFormValidationSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        <Form>
          <EditProfileForm
            isLoading={isLoading}
            apiError={apiError}
          />
        </Form>
      </Formik>
    </div>
  );
};

EditProfile.displayName = EDIT_PROFILE_NAME;

export default EditProfile;
