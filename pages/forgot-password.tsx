import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import { Row, Button } from "antd";

import Layout from "layouts/Intro";
import InputField from "ui/inputs/InputField";
import Title from "styled/Title";

import { ForgotPasswordComponent } from "../generated/apolloComponents";

interface RegisterFormValues {
  email: string;
}

const ForgotPassword: React.FunctionComponent = () => {
  return (
    <Layout title="Forgot password page">
      <Title textAlign="center">Forgot Password</Title>

      <ForgotPasswordComponent>
        {(forgotPassword, { loading }) => (
          <Formik
            initialValues={{
              email: ""
            }}
            onSubmit={async (data: RegisterFormValues) => {
              const response = await forgotPassword({
                variables: data
              });

              console.log("response :", response);

              Router.push("/confirm-email");
            }}
          >
            {({ handleSubmit }: FormikProps<RegisterFormValues>) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    placeholder="Email"
                    component={InputField}
                  />

                  <Row type="flex" justify="end">
                    <Button htmlType="submit" loading={loading}>
                      Forgot password
                    </Button>
                  </Row>
                </form>
              );
            }}
          </Formik>
        )}
      </ForgotPasswordComponent>
    </Layout>
  );
};

export default ForgotPassword;
