import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { ButtonOutline } from './Button';
import { Error } from './Error';

const FormField = styled(Field)`
  width: 100%;
  height: 40px;

  margin-bottom: 1rem;
`;

const SubmitButton = styled(ButtonOutline)`
  width: 100%;
  :disabled {
    opacity: 0.4;
  }
`;

const Schema = Yup.object().shape({
  fullname: Yup.string().min(3, 'Your name needs to be at least 3 characters long').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  emailConfirmation: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Required'),
});

export const RequestForm = ({ onSuccess }) => {
  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        emailConfirmation: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
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

        setSubmitting(false);
      }}
      validationSchema={Schema}
    >
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form>
          <FormField id="fullname" name="fullname" placeholder="Full name" autocomplete="off" />
          {errors.fullname && touched.fullname ? <Error>{errors.fullname}</Error> : null}
          <FormField id="email" name="email" placeholder="Email" type="email" autocomplete="off" />
          {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
          <FormField
            id="emailConfirmation"
            name="emailConfirmation"
            placeholder="Confirm email"
            type="email"
            autocomplete="off"
          />
          {errors.emailConfirmation && touched.emailConfirmation ? <Error>{errors.emailConfirmation}</Error> : null}
          <SubmitButton type="submit" my={4} disabled={!(isValid && dirty)}>
            {isSubmitting ? 'Sending, please wait...' : 'Send'}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
