import React, { useState } from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledFeedback } from '../../styles/Form.styles';
import { Form } from 'react-bootstrap';
import { StyledButton } from '../../styles/Form.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth } from 'firebase/auth';
import { app } from '../../config/firebase';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface LoginUserProp {
  auth: Auth;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [isErrorLoginShown, setIsErrorLoginShown] = useState(false);

  const loginUser = ({ auth, email, password }: LoginUserProp) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('udało się zalogować - /inside strona/');
      })
      .catch(() => {
        console.log('złe hasło lub email');
        setIsErrorLoginShown(true);
      });
  };

  const auth = getAuth(app);

  //Get the currently signed-in user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Zalogowany');
    } else {
      console.log('Niezalogowany');
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required.')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, '8 characters, one uppercase letter, one number'),
    }),
    onSubmit: (values) => {
      loginUser({ auth: auth, email: values.email, password: values.password });
      formik.resetForm();
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <StyledLabel>Email address</StyledLabel>
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
        <StyledLabel>Password</StyledLabel>
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
        Login
      </StyledButton>
      <Snackbar open={isErrorLoginShown} autoHideDuration={6000} onClose={() => setIsErrorLoginShown(false)}>
        <Alert variant="filled" onClose={() => setIsErrorLoginShown(false)} severity="error" sx={{ width: '100%' }}>
          Incorrect e-mail or password
        </Alert>
      </Snackbar>
    </StyledForm>
  );
};
