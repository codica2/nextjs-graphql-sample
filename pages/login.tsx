import React from "react";
import Router from "next/router";
import { Row } from "antd";
import { Field, Formik, FormikProps } from "formik";
import { Heading } from "rebass";

import Layout from "@views/layouts/Intro";
import Button from "@views/ui/Button";
import InputField from "@views/ui/inputs/InputField";

import { LoginComponent, MeQuery } from "@generated/apolloComponents";

import { meQuery } from "@graphql/user/queries/me";

interface ILoginFormValues {
  email: string;
  password: string;
}

const Register: React.FC = () => (
  <Layout title="Login page">
    <Heading textAlign="center" fontWeight="bold" pb={20}>
      Log in
    </Heading>

    <LoginComponent>
      {(login, { loading }) => (
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
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
          {({ handleSubmit }: FormikProps<ILoginFormValues>) => {
            return (
              <form onSubmit={handleSubmit}>
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
    </LoginComponent>
  </Layout>
);

export default Register;
