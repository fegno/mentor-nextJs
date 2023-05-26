import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import style from "./NewsletterForm.module.scss";
import icon from "../../assets/arrow-right-blue.svg";

const SCHEMA = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Enter Email"),
});
const INITIAL_VALUES = {
  email: "",
};
const NewsletterForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitHandler = () => {
    setIsSuccess(true);
  };
  return (
    <div className="d-block pt-4">
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SCHEMA}
        onSubmit={onSubmitHandler}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className={style.form}>
              <div className="row">
                <div className="col-12">
                  <h5 className={style.title}>Newsletter</h5>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    value={values.email}
                    placeholder="Enter your email address"
                    name="email"
                    onChange={(e)=>{handleChange(e);setIsSuccess(false)}}
                    onBlur={handleBlur}
                  />
                </div>
                {isSuccess && (
                  <div className={`col-12 ${style.success}`}>Thank you for subscribing</div>
                )}
                <div className={`col-12 ${style.error}`}>
                  <ErrorMessage name="email" />
                </div>
                <div className="col-1 pt-3">
                  <button type="submit">
                    SUBSCRIBE
                    <img src={icon.src} alt="arrow" />
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default NewsletterForm;
