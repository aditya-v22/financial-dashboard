import { useTransition } from 'react';
import { Form, Formik } from 'formik';
import { editProfileFormValidationSchema } from './validation';
import { EditProfileForm } from './EditProfileForm';
import { editProfileFormInitialValues } from './formFields';
import { UserInput } from '../../types/user';
import { EditProfileFormikForm } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { updateUser } from '../../features/userSlice';

const EDIT_PROFILE_NAME = 'EditProfile';

const EditProfile = () => {
  const [isLoading, startTransition] = useTransition();
  const dispatch = useDispatch<AppDispatch>();
  const { user, errorWhileUpdating } = useSelector((state: RootState) => state.user);

  const submitForm = (values: UserInput) => {
    startTransition(async () => {
      await dispatch(updateUser(values));
    });
  };

  return (
    <div className='pt-8 pl-8 w-full'>
      <Formik<EditProfileFormikForm>
        enableReinitialize
        initialValues={user || editProfileFormInitialValues}
        validationSchema={editProfileFormValidationSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        <Form>
          <EditProfileForm
            isLoading={isLoading}
            apiError={errorWhileUpdating}
          />
        </Form>
      </Formik>
    </div>
  );
};

EditProfile.displayName = EDIT_PROFILE_NAME;

export default EditProfile;
