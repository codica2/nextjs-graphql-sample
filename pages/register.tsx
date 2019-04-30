import React from "react";
import Router from "next/router";
import { Field, Formik, FormikProps } from "formik";

import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/InputField";
import Button from "@views/ui/Button";
import { Heading, Flex } from "@views/styled";

import { RegisterComponent } from "@generated/apolloComponents";
import { registerSchema } from "@utils/validationSchemas";

interface IRegisterFormValues {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Register: React.FC = () => (
  <Layout title="Register page">
    <Heading textAlign="center">Register</Heading>

    <RegisterComponent>
      {(register, { loading }) => (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            password: "",
            email: ""
          }}
          validationSchema={registerSchema}
          onSubmit={async (data: IRegisterFormValues, { setErrors }) => {
            try {
              await register({
                variables: {
                  data
                }
              });

              Router.push("/confirm-email");
            } catch (error) {
              const errors =
                (error.graphQLErrors[0] &&
                  error.graphQLErrors[0].validationErrors) ||
                [];

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
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => (
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

              <Field name="email" placeholder="Email" component={InputField} />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={InputField}
              />

              <Flex justifyContent="flex-end">
                <Button type="submit" loading={loading}>
                  Submit
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      )}
    </RegisterComponent>
  </Layout>
);

export default Register;
