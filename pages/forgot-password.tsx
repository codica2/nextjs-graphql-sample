import { Button, Row } from "antd";
import { Field, Formik, FormikProps } from "formik";
import Router from "next/router";
import React from "react";

import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/inputs/InputField";
import { Heading } from "@views/styled";

import { ForgotPasswordComponent } from "@generated/apolloComponents";

interface IRegisterFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => (
  <Layout title="Forgot password page">
    <Heading textAlign="center">Forgot Password</Heading>

    <ForgotPasswordComponent>
      {(forgotPassword, { loading }) => (
        <Formik
          initialValues={{
            email: ""
          }}
          onSubmit={async (data: IRegisterFormValues) => {
            await forgotPassword({
              variables: data
            });

            Router.push("/confirm-email");
          }}
        >
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => {
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

export default ForgotPassword;
