import React, { useState } from "react";
import style from "./Contact.module.scss";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./schema";
import { Formik, ErrorMessage } from "formik";
import image from "../../assets/Form_vector.svg";
import arrow from "../../assets/arrow-right.svg";
import Container from "../container";
import sgMail from "@sendgrid/mail";

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
  // sgMail.setApiKey(
  //   "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"
  // );

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitHandler = async () => {
    // const msg = {
    //   to: "manoj@gmail.com",
    //   from: "contact@mentoracademy.co.in",
    //   subject: "Subject of the email",
    //   text: "Body of the email",
    // };
    // await sgMail
    //   .send(msg)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setIsSuccess(true)
  };
  return (
    <Container>
      <div className={`${style.form}`}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-12 col-lg-5">
            <h1 className={style.title}>Apply</h1>
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
                        <FormErrorField name="name" />
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
                        <FormErrorField name="email" />
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
                        <FormErrorField name="mobile" />
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
                        <FormErrorField name="state" />
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
                        <FormErrorField name="course" />
                      </div>
                      {isSuccess && <div className="col-12" style={{color:"green"}}>
                       Application submitted
                      </div>}
                      <div className="col-12">
                        <button type="submit" className={style.submit}>
                          Submit
                          <img
                            src={arrow.src}
                            alt="arrow"
                            className={style.icon}
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="col-12 col-lg-7">
            <div className={style.image_wrapper}>
              <img src={image.src} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactForm;
