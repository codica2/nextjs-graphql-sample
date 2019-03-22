import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import { Row, Button } from "antd";

import Layout from "layouts/Intro";
import InputField from "ui/inputs/InputField";
import Title from "styled/Title";

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
      <Title textAlign="center">Register</Title>

      <RegisterComponent>
        {(register, { loading }) => (
          <Formik
            initialValues={{
              password: "",
              firstName: "",
              lastName: "",
              email: ""
            }}
            onSubmit={async (data: RegisterFormValues, { setErrors }) => {
              try {
                await register({
                  variables: {
                    data
                  }
                });

                Router.push("/confirm-email");
              } catch (error) {
                const errors = error.graphQLErrors[0].validationErrors;

                const validationErrors = errors.reduce(
                  (
                    obj: any,
                    err: { property: string; constraints: string }
                  ) => {
                    obj[err.property] = Object.values(err.constraints)[0];
                    return obj;
                  },
                  {}
                );

                setErrors(validationErrors);
                console.error(error);
              }
            }}
          >
            {({ handleSubmit }: FormikProps<RegisterFormValues>) => {
              return (
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

                  <Row type="flex" justify="end">
                    <Button htmlType="submit" loading={loading}>
                      Submit
                    </Button>
                  </Row>
                </form>
              );
            }}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
