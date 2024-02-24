import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

export default function ContactForm({ onSavedForm }) {
  const usernameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSavedForm(values);
          actions.resetForm();
        }}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={usernameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={usernameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />

          <label htmlFor={phoneFieldId}>Number</label>
          <Field
            className={css.input}
            type="number"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage className={css.error} name="phone" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
