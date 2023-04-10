import React from "react";
import style from "./Contact.module.scss";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./schema";
import { Formik, ErrorMessage } from "formik";
const FormErrorField: React.FC<{ name: string }> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => {
        return <span className={style.error}>{msg}</span>;
      }}
    />
  );
};
const ContactForm: React.FC = () => {
  const onSubmitHandler = () => {};
  return (
    <section>
      <div className={`container ${style.form}`}>
        <div className="row">
            <div className="col-12 mb-4">
                <h1 className={style.title}>Apply</h1>
            </div>
          <div className="col-12 col-md-5">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={VALIDATION_SCHEMA}
              onSubmit={onSubmitHandler}
            >
              {({ values, handleSubmit, handleChange, handleBlur }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className={`col-12 ${style.wrapper}`}>
                        <input
                          className={style.input}
                          type="text"
                          placeholder="Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                        />
                        <FormErrorField  name="name" />
                      </div>
                      <div className={`col-12 ${style.wrapper}`}>
                        <input
                          type="text"
                          className={style.input}
                          placeholder="Email ID"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                        />
                         <FormErrorField  name="email" />
                      </div>
                      <div className={`col-12 ${style.wrapper}`}>
                        <input
                          type="text"
                          className={style.input}
                          placeholder="Mobile"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobile}
                          name="mobile"
                        />
                         <FormErrorField  name="mobile" />
                      </div>
                      <div className={`col-12 ${style.wrapper}`}>
                        <input
                          type="text"
                          className={style.input}
                          placeholder="State"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                          name="state"
                        />
                         <FormErrorField  name="state" />
                      </div>
                      <div className={`col-12 ${style.wrapper}`}>
                        <input
                          type="text"
                          className={style.input}
                          placeholder="Course"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.course}
                          name="course"
                        />
                         <FormErrorField  name="course" />
                      </div>
                      <div className="col-12">
                        <button type="submit" className={style.submit}>Submit</button>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="col-12 col-md-7"></div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;