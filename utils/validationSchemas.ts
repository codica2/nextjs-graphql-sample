import * as yup from "yup";

const email = yup
  .string()
  .email("Invalid email")
  .required("Required");

const password = yup
  .string()
  .min(2, "Must be more than 2 characters")
  .required("Required");

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Must be more than 2 characters")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Must be more than 2 characters")
    .required("Required"),
  email,
  password
});

export const loginSchema = yup.object().shape({
  email,
  password
});

export const forgotPasswordSchema = yup.object().shape({
  email
});
