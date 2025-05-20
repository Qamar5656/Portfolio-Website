import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AstericSign from "../CommonComponents/AstericSign";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";

const initialValue = {
  name: "",
  email: "",
  message: "",
};
const validateSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Minimum 3 characters required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  message: Yup.string().min(5, "Minimum 5 characters are required"),
});

const ContactForm = ({ onClose }) => {
  const handleSubmit = (values) => {
    console.log("submit button clicked", values);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-20 z-20">
      <div className="bg-white p-4 border rounded-xl px-14 mt-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl py-3">Contact Us Now</h1>
          <p className="py-3">
            <AiOutlineClose
              onClick={onClose}
              size={28}
              className="cursor-pointer"
            />
          </p>
        </div>
        <div>
          <Formik
            initialValues={initialValue}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <p className="flex justify-end text-red-400 py-2">
                Note: Fields with (*) sign are required fields{" "}
              </p>
              <div className="flex flex-col py-2">
                <label htmlFor="name" className="flex pb-2">
                  Name (<AstericSign />) :
                </label>
                <Field
                  name="name"
                  type="text"
                  className="border p-2 rounded-lg"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 py-2"
                />
              </div>
              <div className="flex flex-col py-3">
                <label htmlFor="email" className="flex pb-2">
                  Email (<AstericSign />) :
                </label>
                <Field
                  name="email"
                  type="email"
                  className="border p-2 rounded-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 py-2"
                />
              </div>
              <div className="flex flex-col py-3">
                <label htmlFor="message" className="pb-2">
                  Message:
                </label>
                <Field
                  name="message"
                  as="textarea"
                  className="border p-2 rounded-lg"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-center items-center py-2">
                <button
                  type="submit"
                  className="border bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-lg p-2"
                >
                  Submit Now
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
