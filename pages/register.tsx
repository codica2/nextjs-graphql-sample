import { Button, Row } from "antd";
import { Field, Formik, FormikProps } from "formik";
import Router from "next/router";
import React from "react";
import { Heading } from "rebass";

import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/inputs/InputField";

import { RegisterComponent } from "@generated/apolloComponents";

interface IRegisterFormValues {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Register: React.FC = () => (
  <Layout title="Register page">
    <Heading textAlign="center" fontWeight="bold" pb={20}>
      Register
    </Heading>

    <RegisterComponent>
      {(register, { loading }) => (
        <Formik
          initialValues={{
            password: "",
            firstName: "",
            lastName: "",
            email: ""
          }}
          onSubmit={async (data: IRegisterFormValues, { setErrors }) => {
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
                (obj: any, err: { property: string; constraints: string }) => {
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
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => {
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

export default Register;
