import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("User registered successfully!");
    resetForm();
  };

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>Formik Registration</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Username */}
          <div>
            <label>Username</label>
            <br />
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <br />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;