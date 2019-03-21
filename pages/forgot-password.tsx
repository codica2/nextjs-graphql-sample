import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import Button from "antd/lib/button";

import Layout from "../views/layouts";
import { InputField } from "../views/ui/inputs/InputField";
import { ForgotPasswordComponent } from "../generated/apolloComponents";

interface RegisterFormValues {
  email: string;
}

const ForgotPassword: React.FunctionComponent = () => {
  return (
    <Layout title="Forgot password page">
      <ForgotPasswordComponent>
        {forgotPassword => (
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

                  <Button htmlType="submit">Forgot password</Button>
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
