import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import style from "./NewsletterForm.module.scss" ;
const SCHEMA = Yup.object().shape({
  email: Yup.string().email().required(),
});
const INITIAL_VALUES = {
  email: "",
};
const NewsletterForm: React.FC = () => {
  const onSubmitHandler = () => {};
  return (
    <div className="d-block pt-4">
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SCHEMA}
        onSubmit={onSubmitHandler}
      >
        {() => {
          return (
            <form onSubmit={onSubmitHandler} className={style.form}>
              <div className="row">
                <div className="col-12">
                    <h5>Newsletter</h5>
                </div>
                <div className="col-12">
                    <input type="text" placeholder="Enter your email address" />
                </div>
                <div className="col-1">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default NewsletterForm ;