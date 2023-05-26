import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import style from "./Contactfrom.module.scss";

const ContactForm: React.FC = () => {
  const [data, setData] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues = {
    name: "",
    mob: "",
    course: "",
    email: "",
    state: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "The name tou entered is too short")
      .max(30, "The name you entered is too Long")
      .required("Name required"),
    mob: Yup.string()
      .min(10, "Please enter a valid mobile number")
      .max(12, "Please enter a valid mobile number")
      .required("Mobile number required"),
    email: Yup.string().email("Invalid email format").required("Enter email"),
    course: Yup.string().required("Enter your interested field of study"),
    state: Yup.string().required("Enter state"),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    setIsSuccess(true);
    resetForm({});
  };
  return (
    <div className={`${style.form_container}`}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={`${style.name_fld}`}>
              <input
                type="text"
                name="name"
                id="fm_name"
                placeholder="Name*"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className={style.error}>{errors.name}</div>
              )}
            </div>

            <div className={`${style.phone_fld}`}>
              <input
                type="text"
                id="fm_mob"
                name="mob"
                placeholder="Mobile*"
                value={values.mob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mob && touched.mob && (
                <div className={style.error}>{errors.mob}</div>
              )}
            </div>

            <div className={`${style.fos_fld}`}>
              <input
                type="text"
                name="course"
                id="fm_fos"
                placeholder="Interested field of study"
                value={values.course}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.course && touched.course && (
                <div className={style.error}>{errors.course}</div>
              )}
            </div>

            <div className={`${style.mail_fld}`}>
              <input
                type="email"
                name="email"
                id="fm_mail"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className={style.error}>{errors.email}</div>
              )}
            </div>
            <div className={`${style.state_fld}`}>
              <input
                type="text"
                name="state"
                id="fm_state"
                placeholder="State"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.state && touched.state && (
                <div className={style.error}>{errors.state}</div>
              )}
            </div>
            {isSuccess && (
              <div className={style.success}>Submitted successfully</div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default ContactForm;
