import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import Button from "antd/lib/button";
import { NextContext } from "next";

import Layout from "../views/layouts";
import { InputField } from "../views/ui/inputs/InputField";
import { ChangePasswordComponent } from "../generated/apolloComponents";

interface RegisterFormValues {
  password: string;
}

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Layout title="Chnage password page">
      <ChangePasswordComponent>
        {forgotPassword => (
          <Formik
            initialValues={{
              password: ""
            }}
            onSubmit={(data: RegisterFormValues) =>
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
            {({ handleSubmit }: FormikProps<RegisterFormValues>) => {
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
};

ChangePassword.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => ({
  token
});

export default ChangePassword;
