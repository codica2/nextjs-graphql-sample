import React from "react";
import Router from "next/router";
import { NextContext } from "next";
import { Field, Formik, FormikProps } from "formik";

import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/InputField";
import Button from "@views/ui/Button";
import { Flex } from "@views/styled";

import { ChangePasswordComponent } from "@generated/apolloComponents";

interface IRegisterFormValues {
  password: string;
}

const ChangePassword = ({ token }: { token: string }) => (
  <Layout title="Chnage password page">
    <ChangePasswordComponent>
      {(forgotPassword, { loading }) => (
        <Formik
          initialValues={{
            password: ""
          }}
          onSubmit={(data: IRegisterFormValues) =>
            forgotPassword({
              variables: {
                data: {
                  password: data.password,
                  token
                }
              }
            }).then(() => Router.push("/"))
          }
        >
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                component={InputField}
              />

              <Flex justifyContent="flex-end">
                <Button type="submit" loading={loading}>
                  Change password
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      )}
    </ChangePasswordComponent>
  </Layout>
);

ChangePassword.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => ({
  token
});

export default ChangePassword;
