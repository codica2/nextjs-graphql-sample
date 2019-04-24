import Button from "antd/lib/button";
import { Field, Formik, FormikProps } from "formik";
import { NextContext } from "next";
import Router from "next/router";
import React from "react";

import { ChangePasswordComponent } from "@generated/apolloComponents";
import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/InputField";

interface IRegisterFormValues {
  password: string;
}

const ChangePassword = ({ token }: { token: string }) => (
  <Layout title="Chnage password page">
    <ChangePasswordComponent>
      {forgotPassword => (
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
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  component={InputField}
                />

                <Button htmlType="submit">Change password</Button>
              </form>
            );
          }}
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
