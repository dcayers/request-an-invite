import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { ButtonOutline } from '../primitives/Button';
import { Error } from '../primitives/Error';

const FormField = styled(Field)`
  width: 100%;
  height: 40px;
  margin-bottom: 1rem;
  border-radius: 0;
  border-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.secondary}7d;
  border-style: solid;
  font-size: 1.5vmin;
  :focus {
    padding-left: 1rem;
    &::placeholder {
      transform: translateY(-10px);
    }
  }
`;

const SubmitButton = styled(ButtonOutline)`
  width: 100%;
  font-size: 2vmin;
  :disabled {
    opacity: 0.4;
  }
`;

const Schema = Yup.object().shape({
  fullname: Yup.string().min(3, 'Your name needs to be at least 3 characters long').required('Full name is Required'),
  email: Yup.string().email('Invalid email address').required('Email address is Required'),
  emailConfirmation: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Email confirmation is Required'),
});

export const RequestForm = ({ onSuccess }) => {
  const [serverError, setServerError] = React.useState(null);
  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        emailConfirmation: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await axios({
            method: 'post',
            url: 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
            data: {
              name: values.fullname,
              email: values.email,
            },
          });

          if (response.status === 200) {
            onSuccess(resetForm);
          }
        } catch (error) {
          // Would handle other types of errors as well, but for now, this is fine.
          setServerError(error.response.data.errorMessage);
          setSubmitting(false);
        }
      }}
      validationSchema={Schema}
    >
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form>
          <FormField id="fullname" name="fullname" placeholder="Full name" autoComplete="nope" />
          {errors.fullname && touched.fullname ? <Error>{errors.fullname}</Error> : null}
          <FormField id="email" name="email" placeholder="Email" type="email" autoComplete="off" />
          {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
          <FormField
            id="emailConfirmation"
            name="emailConfirmation"
            placeholder="Confirm email"
            type="email"
            autoComplete="nope"
          />
          {errors.emailConfirmation && touched.emailConfirmation ? <Error>{errors.emailConfirmation}</Error> : null}
          <SubmitButton type="submit" my={4} disabled={!(isValid && dirty)}>
            {isSubmitting ? 'Sending, please wait...' : 'Send'}
          </SubmitButton>
          {serverError && <Error style={{ textAlign: 'center' }}>{serverError}</Error>}
        </Form>
      )}
    </Formik>
  );
};
