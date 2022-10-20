import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const profileSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  username: Yup.string().required(),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required(),
  city: Yup.string().required(),
  country: Yup.string().required(),
  code: Yup.number("Zip Code should be number only").required(),
  about: Yup.string().min(30).required(),
});
