import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import { Row } from "antd";

import Layout from "layouts/Intro";
import Button from "ui/Button";
import InputField from "ui/inputs/InputField";
import Title from "styled/Title";

import { LoginComponent, MeQuery } from "generated/apolloComponents";

import { meQuery } from "../graphql/user/queries/me";

interface LoginFormValues {
  email: string;
  password: string;
}

const Register: React.FC = () => (
  <Layout title="Login page">
    <Title textAlign="center">Log in</Title>

    <LoginComponent>
      {(login, { loading }) => (
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={async (data: LoginFormValues, { setErrors }) => {
            const response = await login({
              variables: data,
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
          {({ handleSubmit }: FormikProps<LoginFormValues>) => {
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
