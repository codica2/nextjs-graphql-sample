import React from "react";
import Router from "next/router";
import { Field, Formik, FormikProps } from "formik";

import Layout from "@views/layouts/Intro";
import InputField from "@views/ui/InputField";
import Button from "@views/ui/Button";
import { Heading, Flex } from "@views/styled";

import { ForgotPasswordComponent } from "@generated/apolloComponents";
import { forgotPasswordSchema } from "@utils/validationSchemas";

interface IRegisterFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => (
  <Layout title="Forgot password">
    <Heading textAlign="center">Forgot Password</Heading>

    <ForgotPasswordComponent>
      {(forgotPassword, { loading }) => (
        <Formik
          initialValues={{
            email: ""
          }}
          validationSchema={forgotPasswordSchema}
          onSubmit={async (data: IRegisterFormValues) => {
            await forgotPassword({
              variables: data
            });

            Router.push("/confirm-email");
          }}
        >
          {({ handleSubmit }: FormikProps<IRegisterFormValues>) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" placeholder="Email" component={InputField} />

              <Flex justifyContent="flex-end">
                <Button type="submit" loading={loading}>
                  Forgot password
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      )}
    </ForgotPasswordComponent>
  </Layout>
);

export default ForgotPassword;
