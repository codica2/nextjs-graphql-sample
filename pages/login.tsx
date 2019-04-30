import React from "react";
import Router from "next/router";
import { Field, Formik, FormikProps } from "formik";

import Layout from "@views/layouts/Intro";
import Button from "@views/ui/Button";
import InputField from "@views/ui/InputField";
import { Heading, Flex } from "@views/styled";

import { LoginComponent, MeQuery } from "@generated/apolloComponents";

import { meQuery } from "@graphql/user/queries/me";
import { loginSchema } from "@utils/validationSchemas";

interface ILoginFormValues {
  email: string;
  password: string;
}

const Register: React.FC = () => (
  <Layout title="Login page">
    <Heading textAlign="center">Log in</Heading>

    <LoginComponent>
      {(login, { loading }) => (
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={loginSchema}
          onSubmit={async (values: ILoginFormValues, { setErrors }) => {
            const response = await login({
              variables: values,
              update: (cache, { data }) => {
                if (!data || !data.login) {
                  return;
                }

                cache.writeQuery<MeQuery>({
                  query: meQuery,
                  data: {
                    me: data.login
                  }
                });
              }
            });

            if (response && response.data && !response.data.login) {
              setErrors({
                email: "Invalid login"
              });

              return;
            }

            Router.push("/");
          }}
        >
          {({ handleSubmit }: FormikProps<ILoginFormValues>) => (
            <form onSubmit={handleSubmit}>
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
    </LoginComponent>
  </Layout>
);

export default Register;
