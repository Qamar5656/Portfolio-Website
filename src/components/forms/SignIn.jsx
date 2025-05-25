import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValue = {
  name: "",
  email: "",
  password: "",
};

const validationSchemas = Yup.object({
  name: Yup.string()
    .min(3, "minimum 3 characters")
    .max(9, "maximum 9 characters"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("password is required")
    .min(3, "minimum 3 characters")
    .max(9, "maximum 9 characters"),
});
const SignIn = () => {
  const handleSubmit = () => {
    alert("submit button clicked");
  };
  return (
    <>
      <div className="flex items-center justify-center p-2">
        <h1 className="text-xl border">SignIn Form</h1>
      </div>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchemas}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-2 outline-none ">
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            name="name"
            className="border p-2"
            placeholder="Enter your name"
          />
          <ErrorMessage className="text-red-400" component="div" name="name" />
          <label htmlFor="name">Email:</label>
          <Field
            type="email"
            name="email"
            className="border p-2"
            placeholder="Enter your email"
          />
          <ErrorMessage className="text-red-400" component="div" name="email" />
          <label htmlFor="name">password:</label>
          <Field
            type="password"
            name="password"
            className="border p-2"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className="text-red-400"
            component="div"
            name="password"
          />
        </Form>
      </Formik>
    </>
  );
};

export default SignIn;
