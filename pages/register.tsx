import React from "react";
import { Formik, Field, FormikProps } from "formik";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";

interface RegisterFormValues {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Register: React.FunctionComponent = () => {
  return (
    <Layout title="Register page">
      <RegisterComponent>
        {register => (
          <Formik
            initialValues={{
              password: "",
              firstName: "",
              lastName: "",
              email: ""
            }}
            onSubmit={async (data: RegisterFormValues) => {
              await register({
                variables: {
                  data
                }
              });
            }}
          >
            {({ handleSubmit }: FormikProps<RegisterFormValues>) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  placeholder="First name"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="Last name"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={InputField}
                />

                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
