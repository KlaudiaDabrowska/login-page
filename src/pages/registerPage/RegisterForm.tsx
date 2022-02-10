import React, { useState } from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledFeedback } from '../../styles/Form.styles';
import { Form } from 'react-bootstrap';
import { StyledButton } from '../../styles/Form.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../config/firebase';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const RegisterForm = () => {
  const [succesSignUp, setSuccesSignUp] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState(false);

  const handleClose = () => {
    setSuccesSignUp(false);
    setErrorSignUp(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, '8 characters, one uppercase letter, one number'),
    }),
    onSubmit: (values) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setSuccesSignUp(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignUp(true);
        });

      formik.resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <StyledLabel htmlFor="email">Email address</StyledLabel>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && !!formik.errors.email}
          placeholder="Enter email"
        />
        {formik.touched.email && formik.errors.email ? <StyledFeedback type="invalid">{formik.errors.email}</StyledFeedback> : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.password && !!formik.errors.password}
          placeholder="Enter password"
        />
        {formik.touched.password && formik.errors.password ? <StyledFeedback type="invalid">{formik.errors.password}</StyledFeedback> : null}
      </Form.Group>
      <StyledButton variant="primary" type="submit" size="sm">
        Sign Up
      </StyledButton>
      <Snackbar open={succesSignUp} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          You have created your account!
        </Alert>
      </Snackbar>
      <Snackbar open={errorSignUp} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This email is already registered.
        </Alert>
      </Snackbar>
    </StyledForm>
  );
};
