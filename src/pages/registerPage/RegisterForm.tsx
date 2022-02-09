import React from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledFeedback } from '../../assets/styles/Form.styles';
import { Form } from 'react-bootstrap';
import { StyledButton } from '../../assets/styles/Form.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {
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
      alert(JSON.stringify(values, null, 2));
      console.log(values);
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
    </StyledForm>
  );
};
