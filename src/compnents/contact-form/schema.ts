import * as Yup from "yup";
export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required('Email is required'),
  mobile: Yup.string(),
  state: Yup.string(),
  course: Yup.string(),
});
export const INITIAL_VALUES = {
  name: "",
  email: "",
  mobile: "",
  state: "",
  course: "",
};
